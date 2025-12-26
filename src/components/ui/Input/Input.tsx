import { useState, InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  type?: "text" | "email" | "password" | "tel" | "url";
  showPasswordToggle?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", showPasswordToggle = false, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputType = showPasswordToggle && type === "password" ? (showPassword ? "text" : "password") : type;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="block text-[14px] font-nanum-square font-bold text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div
          className={`relative w-full border-2 rounded-[10px] transition-colors ${
            error ? "border-red-500" : isFocused ? "border-raw-umber" : "border-gray-300"
          } ${className}`}
        >
          <input
            ref={ref}
            type={inputType}
            className={`w-full px-4 py-3 text-[16px] font-nanum-square font-regular bg-white rounded-[10px] focus:outline-none ${
              error ? "text-red-900" : "text-gray-900"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-[14px] font-nanum-square font-regular"
            >
              {showPassword ? "숨기기" : "보기"}
            </button>
          )}
        </div>
        {error && <p className="mt-1 text-[12px] font-nanum-square font-regular text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
