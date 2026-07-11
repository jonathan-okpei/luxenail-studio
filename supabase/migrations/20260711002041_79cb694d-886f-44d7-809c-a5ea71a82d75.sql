DROP POLICY IF EXISTS "Anyone can read nail inspo" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload nail inspo" ON storage.objects;
CREATE POLICY "Guests can upload nail inspo to uploads folder"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    bucket_id = 'nail-inspo'
    AND (storage.foldername(name))[1] = 'uploads'
    AND lower(right(name, 5)) IN ('.jpeg','.jpg','.png','.webp','.heic')
    OR (bucket_id = 'nail-inspo' AND (storage.foldername(name))[1] = 'uploads' AND lower(right(name, 4)) IN ('.jpg','.png'))
  );