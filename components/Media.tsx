"use client";
import Image from "next/image";
import React from "react";

interface MediaProps {
    src: string;
    alt: string;
    width:number;
    height:number
  }
const Media:React.FC<MediaProps> = ({ src, alt,width=300,height=300 }) => {

    return ( 
        <Image
        src={src}
        alt={alt}
        blurDataURL={src}	
        // objectFit="cover"
        width={width}
        height={height}
        
      />
     );
}
 
export default Media;