import { redirect } from "react-router-dom";
import { useAuthStore, authInitialized } from "@/store/useAuthStore";
export const authLoader = async ({ request }: { request: Request }) => {
  await authInitialized;
  const { isAuthenticated } = useAuthStore.getState();

  if (!isAuthenticated) {
    const url = new URL(request.url);
    throw redirect(`/login?from=${url.pathname}`);
  }

  return null;
};
