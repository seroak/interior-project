import { redirect } from "react-router-dom";

import { useAuthStore, authInitialized } from "@/store/useAuthStore";
export const publicLoader = async () => {
  await authInitialized;

  const { isAuthenticated } = useAuthStore.getState();
  if (isAuthenticated) {
    throw redirect(`/`);
  }

  return null;
};
