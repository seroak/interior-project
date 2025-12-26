-- 1. 기존 테이블이 있다면 삭제 (선택사항, 데이터가 날아갑니다!)
-- DROP TABLE IF EXISTS generated_images;

-- 2. generated_images 테이블 생성
CREATE TABLE IF NOT EXISTS generated_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now(),
    original_image_url TEXT NOT NULL,
    generated_images JSONB NOT NULL 
    -- generated_images는 ["url1", "url2", ...] 형태의 JSON 배열이 저장됩니다.
);

-- 3. RLS(Row Level Security) 설정 (테스트용으로 모든 권한 허용)
-- 실서비스 런칭 전에는 권한을 축소해야 합니다.
ALTER TABLE generated_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read/write for all users" 
ON generated_images
FOR ALL 
USING (true) 
WITH CHECK (true);

-- 4. Storage Bucket 설정 (이미 생성했다면 패스)
-- 버킷 이름: generated-images (Public으로 설정 필수)
