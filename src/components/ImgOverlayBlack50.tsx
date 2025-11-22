interface ImgOverlayBlack50Props {
  children: React.ReactNode;
  className?: string;
}

const ImgOverlayBlack50 = ({ children, className = "" }: ImgOverlayBlack50Props) => {
  return (
    <div className={`relative w-full ${className}`}>
      {children}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-opacity-black-50" />
    </div>
  );
};

export default ImgOverlayBlack50;
