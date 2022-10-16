import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  src: string;
  alt?: string;
  onClick?: (event: Event) => void;
}

const ImageComponent = ({ className, src, alt, onClick }: Props) => {
  const handleOnClick = (event: Event) => {
    if (onClick) {
      onClick(event);
    }
  }
  return (
    <div className={`image-component ${className}`} onClick={(e: any) => handleOnClick(e)}>
      <Image src={src ? src : ''} layout="fill" alt={alt ? alt : ''} />
    </div>
  );
};

export default ImageComponent;