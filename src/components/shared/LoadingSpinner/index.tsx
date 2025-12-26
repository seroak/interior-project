import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

export const LoadingSpinner = ({ message, size = "md", fullScreen = false }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const containerClass = fullScreen
    ? "w-full min-h-screen flex flex-col items-center justify-center"
    : "h-full w-full flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <Loader2 className={`${sizeClasses[size]} text-raw-umber animate-spin mb-2`} />
      {message && <p className="text-[14px] font-nanum-square font-regular text-gray-600">{message}</p>}
    </div>
  );
};
