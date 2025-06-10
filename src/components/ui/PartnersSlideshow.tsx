'use client';

import React from 'react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

// Echte Partner-Logos
const partners: Partner[] = [
  { id: '1', name: 'Amazon', logo: '/partner/amazon-logo-1024x430.png', alt: 'Amazon Logo' },
  { id: '2', name: 'eBay', logo: '/partner/EBay_logo.svg', alt: 'eBay Logo' },
  { id: '3', name: 'Emil Frey', logo: '/partner/Emil_Frey_Gruppe_logo.svg', alt: 'Emil Frey Gruppe Logo' },
  { id: '4', name: 'Ambroox', logo: '/partner/logo-ambroox.png', alt: 'Ambroox Logo' },
  { id: '5', name: 'CHO', logo: '/partner/cho-main.webp', alt: 'CHO Logo' },
  { id: '6', name: 'MA', logo: '/partner/MA-logo-8e1edd48.png', alt: 'MA Logo' },
];

interface PartnersSlideShowProps {
  className?: string;
}

export const PartnersSlideshow: React.FC<PartnersSlideShowProps> = ({
  className = ''
}) => {
  // Verdoppele die Partner für nahtlose Animation
  const extendedPartners = [...partners, ...partners];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative w-full">
        {/* Desktop View - Infinite scroll */}
        <div className="hidden lg:block">
          <div className="flex animate-scroll space-x-8">
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 w-64"
              >
                <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet View - Infinite scroll */}
        <div className="hidden md:block lg:hidden">
          <div className="flex animate-scroll-tablet space-x-6">
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-500 w-72"
              >
                <div className="relative w-36 h-24 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500"
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
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 w-80"
              >
                <div className="relative w-40 h-28 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500"
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
          animation: scroll 18s linear infinite;
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