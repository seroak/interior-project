import { useState } from "react";

interface CopyLinkBoxProps {
  url: string;
  className?: string;
}

export const CopyLinkBox = ({ url, className = "" }: CopyLinkBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg ${className}`}>
      <input
        type="text"
        value={url}
        readOnly
        className="flex-1 bg-transparent text-sm text-gray-600 outline-none w-full"
      />
      <button
        onClick={handleCopy}
        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
          copied ? "bg-green-500 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
        }`}
      >
        {copied ? "복사완료!" : "주소복사"}
      </button>
    </div>
  );
};
