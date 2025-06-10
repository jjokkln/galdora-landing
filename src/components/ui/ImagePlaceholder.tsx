"use client";

import Image from "next/image";
import { useState } from "react";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderText?: string;
  rounded?: boolean;
}

export const ImagePlaceholder = ({
  src,
  alt = "Image",
  width = 400,
  height = 300,
  className = "",
  placeholderText = "Bild hinzufügen",
  rounded = true,
}: ImagePlaceholderProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  // Wenn kein src vorhanden ist oder Fehler beim Laden
  if (!src || imageError) {
    return (
      <div
        className={`
          flex items-center justify-center 
          bg-white/5 backdrop-blur-sm border border-white/10 
          hover:bg-white/10 transition-all duration-500
          ${rounded ? 'rounded-2xl' : ''}
          ${className}
        `}
        style={{ width, height }}
      >
        <div className="text-center">
          <svg
            className="w-12 h-12 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-300 text-sm">{placeholderText}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        relative overflow-hidden
        ${rounded ? 'rounded-2xl' : ''}
        ${className}
      `}
      style={{ width, height }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`
          object-cover transition-all duration-500 hover:scale-105
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        onLoad={handleImageLoad}
        onError={handleImageError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-all duration-300" />
    </div>
  );
}; 