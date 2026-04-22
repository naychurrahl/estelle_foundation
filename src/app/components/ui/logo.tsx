import React from "react";

interface LogoProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt = "logo",
  size = 180,
  className = "",
}) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  };

  return (
    <div className={`flex gap-2 px-4 py-2 items-center`}>
      <div
        style={containerStyle}
        className={`flex items-center justify-center overflow-hidden rounded-full ${className}`}
      >
        <img src={src} alt={alt} style={imageStyle} />
      </div>
      <div>
        <span className="text-l font-bold text-[#4172af]">Phindol</span>
        <span className="text-l text-gray-700 ml-1">Insurance</span>
        <span className="text-l text-gray-700 ml-1">Brokers</span>
      </div>
    </div>
  );
};

export default Logo;
