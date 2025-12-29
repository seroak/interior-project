import { supabase } from "@/lib/supabase";

export interface SharedImageRecord {
  id: string;
  original_image_url: string;
  generated_images: Record<string, string> | string[];
  created_at: string;
  user_id: string;
}

export const uploadImageToStorage = async (file: Blob): Promise<string> => {
  // const fileName = `${crypto.randomUUID()}.png`;
  // http에서 돌아갈수 있게 변경 https로 변경되면 다시 위에 코드로
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
  const { error } = await supabase.storage.from("generated-images").upload(fileName, file);

  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage.from("generated-images").getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};

export const saveImageRecord = async (
  originalImageUrl: string,
  generatedImages: Record<string, string> | string[]
): Promise<string> => {
  // 1. Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("로그인이 필요한 서비스입니다.");
  }

  // 2. Insert record
  const { data, error } = await supabase
    .from("generated_images")
    .insert({
      original_image_url: originalImageUrl,
      generated_images: generatedImages,
      user_id: user.id,
      user_email: user.email, // Optional, based on schema
    })
    .select("id")
    .single();

  if (error) {
    throw error;
  }

  return data.id;
};

export const getSharedImage = async (id: string): Promise<SharedImageRecord> => {
  const { data, error } = await supabase.from("generated_images").select("*").eq("id", id).single();

  if (error) {
    throw error;
  }

  return data;
};
