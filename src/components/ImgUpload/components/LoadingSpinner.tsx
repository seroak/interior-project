import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-gray-100 rounded-xl bg-white shadow-sm h-[320px]">
      <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-2" />
      <p className="text-gray-500 font-medium">Uploading...</p>
    </div>
  );
};
