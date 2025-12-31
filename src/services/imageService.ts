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
  const cloudflareWorkerUrl = `https://interior.i1004gy.workers.dev/${fileName}`;
  console.log(cloudflareWorkerUrl);
  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage.from("generated-images").getPublicUrl(fileName);
  const response = await fetch(cloudflareWorkerUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  });
  if (response.ok) {
    console.log("클라우드 플레어 업로드 완료");
  }
  return publicUrlData.publicUrl;
};

export const uploadImageToStorageCloudflare = async (file: Blob): Promise<string> => {
  // const fileName = `${crypto.randomUUID()}.png`;
  // http에서 돌아갈수 있게 변경 https로 변경되면 다시 위에 코드로
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`;

  const cloudflareWorkerUrl = `https://interior.i1004gy.workers.dev/${fileName}`;
  console.log(cloudflareWorkerUrl);

  const response = await fetch(cloudflareWorkerUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  });
  if (response.ok) {
    console.log("클라우드 플레어 업로드 완료");
  }
  if (!response.ok) {
    throw new Error("클라우드 플레어 업로드 실패");
  }
  return cloudflareWorkerUrl;
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
export const saveImageRecordCloudflare = async (
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
      user_email: user.email,
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
export const getSharedImageCloudflare = async (id: string): Promise<SharedImageRecord> => {
  const { data, error } = await supabase.from("generated_images").select("*").eq("id", id).single();

  if (error) {
    throw error;
  }

  return data;
};
