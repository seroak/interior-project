-- Supabase Storage는 버킷이 Public이어도, 파일을 '업로드(INSERT)' 하려면 정책이 필요합니다.

-- 1. 로그인한 사용자가 'generated-images' 버킷에 파일을 올릴 수 있게 허용
CREATE POLICY "Allow authenticated users to upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'generated-images' );

-- 2. (혹시 모르니) 업로드한 파일을 본인이 수정/삭제할 수 있게 허용 (선택사항)
CREATE POLICY "Users can update/delete their own storage objects"
ON storage.objects FOR ALL
TO authenticated
USING ( bucket_id = 'generated-images' AND auth.uid() = owner )
WITH CHECK ( bucket_id = 'generated-images' AND auth.uid() = owner );

-- 3. Public 버킷이라 읽기는 되지만, 명시적인 읽기 정책이 필요한 경우
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'generated-images' );
