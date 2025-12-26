import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase 클라이언트 싱글톤 인스턴스
 * 앱 전체에서 하나의 인스턴스만 사용하여 연결을 효율적으로 관리합니다.
 */
let supabaseClient: SupabaseClient | null = null;

/**
 * 환경 변수 검증
 */
function validateEnvVariables() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing VITE_SUPABASE_URL environment variable. Please check your .env file.");
  }

  if (!supabaseKey) {
    throw new Error("Missing VITE_SUPABASE_PUBLISHABLE_KEY environment variable. Please check your .env file.");
  }

  return { supabaseUrl, supabaseKey };
}

/**
 * Supabase 클라이언트 인스턴스를 생성하고 반환합니다.
 * 이미 생성된 인스턴스가 있으면 재사용합니다.
 *
 * @returns Supabase 클라이언트 인스턴스
 */
export function getSupabaseClient(): SupabaseClient {
  if (supabaseClient) {
    return supabaseClient;
  }

  const { supabaseUrl, supabaseKey } = validateEnvVariables();

  supabaseClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      // OAuth 리다이렉트 URL 설정
    },
  });

  return supabaseClient;
}

/**
 * 기본 Supabase 클라이언트 export
 * 대부분의 경우 이 export를 사용하면 됩니다.
 */
export const supabase = getSupabaseClient();
