import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 ${className}`}>
      {/* Gradient Border Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}; 