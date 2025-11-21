import React from "react";

interface ImgOverlayBlack55Props {
  children: React.ReactNode;
  className?: string;
}

const ImgOverlayBlack55 = ({ children, className = "" }: ImgOverlayBlack55Props) => {
  return (
    <div className={`relative w-full ${className}`}>
      {children}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-opacity-black-55" />
    </div>
  );
};

export default ImgOverlayBlack55;
