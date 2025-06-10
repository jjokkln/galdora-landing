'use client';

import React from 'react';
import Image from 'next/image';

interface OfficeImage {
  id: string;
  name: string;
  src: string;
  alt: string;
}

// Büro-Bilder aus dem /buro Verzeichnis
const officeImages: OfficeImage[] = [
  { id: '1', name: 'Büro 1', src: '/buro/IMG_9327.jpeg', alt: 'Büro Impressionen 1' },
  { id: '2', name: 'Büro 2', src: '/buro/IMG_9239.jpeg', alt: 'Büro Impressionen 2' },
  { id: '3', name: 'Büro 3', src: '/buro/IMG_5809.jpeg', alt: 'Büro Impressionen 3' },
  { id: '4', name: 'Büro 4', src: '/buro/IMG_0106.jpeg', alt: 'Büro Impressionen 4' },
];

interface OfficeSlideshowProps {
  className?: string;
}

export const OfficeSlideshow: React.FC<OfficeSlideshowProps> = ({
  className = ''
}) => {
  // Verdoppele die Bilder für nahtlose Animation
  const extendedImages = [...officeImages, ...officeImages];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative">
        {/* Desktop View - Infinite scroll */}
        <div className="hidden lg:block">
          <div className="flex animate-scroll space-x-6">
            {extendedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 w-48 h-36 overflow-hidden"
              >
                <div className="relative w-full h-full hover:scale-105 transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet View - Infinite scroll */}
        <div className="hidden md:block lg:hidden">
          <div className="flex animate-scroll-tablet space-x-5">
            {extendedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 w-56 h-40 overflow-hidden"
              >
                <div className="relative w-full h-full hover:scale-105 transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Infinite scroll */}
        <div className="md:hidden">
          <div className="flex animate-scroll-mobile space-x-4">
            {extendedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 w-64 h-44 overflow-hidden"
              >
                <div className="relative w-full h-full hover:scale-105 transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-all duration-500"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll-tablet {
          animation: scroll 22s linear infinite;
        }

        .animate-scroll-mobile {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-tablet:hover,
        .animate-scroll-mobile:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}; 