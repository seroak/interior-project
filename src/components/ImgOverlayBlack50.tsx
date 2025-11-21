interface ImgOverlayBlack50Props {
  children: React.ReactNode;
}

const ImgOverlayBlack50 = ({ children }: ImgOverlayBlack50Props) => {
  return (
    <div className="relative w-full">
      {children}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-opacity-black-50" />
    </div>
  );
};

export default ImgOverlayBlack50;
