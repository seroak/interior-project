import { X, Pause, EllipsisVertical, FileIcon } from "lucide-react";

interface UploadingCardProps {
  fileName: string;
  progress: number;
  isPaused: boolean;
  onTogglePause: () => void;
  onCancel: () => void;
}

export const UploadingCard = ({
  fileName,
  progress,
  isPaused,
  onTogglePause,
  onCancel,
}: UploadingCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
            <FileIcon size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{fileName || "Uploading..."}</h3>
            <p className="text-xs text-gray-400">
              {progress}% • {progress < 100 ? "5 seconds left" : "Completed"}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onTogglePause}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <Pause size={18} fill={isPaused ? "currentColor" : "none"} />
          </button>
          <button
            onClick={onCancel}
            className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-500 transition-colors"
          >
            <X size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 transition-colors">
            <EllipsisVertical size={18} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
