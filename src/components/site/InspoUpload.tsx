import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BookButton } from "./BookButton";

type UploadedFile = { name: string; url: string };

export function InspoUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  async function handleFiles(list: FileList | null) {
    if (!list || list.length === 0) return;
    setError(null);
    setUploading(true);
    try {
      const folder = `${name.trim().replace(/[^a-z0-9-]/gi, "_") || "guest"}-${Date.now()}`;
      const uploaded: UploadedFile[] = [];
      for (const file of Array.from(list)) {
        if (file.size > 10 * 1024 * 1024) {
          setError(`"${file.name}" is over 10MB and was skipped.`);
          continue;
        }
        const path = `${folder}/${Date.now()}-${file.name.replace(/[^a-z0-9._-]/gi, "_")}`;
        const { error: upErr } = await supabase.storage.from("nail-inspo").upload(path, file, {
          cacheControl: "3600",
          upsert: false,
        });
        if (upErr) throw upErr;
        const { data } = supabase.storage.from("nail-inspo").getPublicUrl(path);
        uploaded.push({ name: file.name, url: data.publicUrl });
      }
      if (notes.trim()) {
        const meta = new Blob([JSON.stringify({ name, notes, files: uploaded }, null, 2)], { type: "application/json" });
        await supabase.storage.from("nail-inspo").upload(`${folder}/_notes.json`, meta);
      }
      setFiles((prev) => [...prev, ...uploaded]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-champagne/40 bg-white/70 backdrop-blur-sm p-8 md:p-10 shadow-[0_30px_60px_-40px_oklch(0.5_0.15_320/0.35)]">
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <input
          type="text"
          placeholder="Your name"
          maxLength={80}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-full border border-border/70 bg-white px-5 py-3 text-sm text-ink placeholder:text-espresso/40 focus:outline-none focus:border-lavender-deep"
        />
        <input
          type="text"
          placeholder="Notes for your technician (colour, shape…)"
          maxLength={280}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="rounded-full border border-border/70 bg-white px-5 py-3 text-sm text-ink placeholder:text-espresso/40 focus:outline-none focus:border-lavender-deep"
        />
      </div>

      <label className="group relative block cursor-pointer rounded-2xl border-2 border-dashed border-lavender-deep/40 bg-gradient-to-br from-white to-lavender/10 px-6 py-10 text-center transition-colors hover:border-lavender-deep">
        <input
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          disabled={uploading}
          onChange={(e) => handleFiles(e.target.files)}
        />
        <p className="font-display text-2xl text-ink">
          {uploading ? "Uploading…" : "Drop your inspo photos here"}
        </p>
        <p className="mt-2 text-sm text-espresso/60">
          JPG or PNG · up to 10MB each · we'll practise the design before your visit
        </p>
      </label>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {files.length > 0 && (
        <div className="mt-6">
          <p className="eyebrow">Sent to your technician</p>
          <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-3">
            {files.map((f) => (
              <a key={f.url} href={f.url} target="_blank" rel="noreferrer" className="group aspect-square overflow-hidden rounded-xl ring-1 ring-champagne/30">
                <img src={f.url} alt={f.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <BookButton>Now pick a time</BookButton>
        <p className="text-xs text-espresso/60">Your inspo is safely stored and linked to your booking.</p>
      </div>
    </div>
  );
}