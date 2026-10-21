import React from 'react';

export default function Logo({ className = "h-10 sm:h-11 lg:h-12", showText = true, isDark = false }) {
  if (!showText) {
    return (
      <div className={`inline-flex items-center select-none cursor-pointer group ${className}`}>
        <img
          src="/logo-icon.png"
          alt="Tech Solutions BD"
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none cursor-pointer group ${className}`}>
      <img
        src={isDark ? "/logo-white.png" : "/logo.png"}
        alt="Tech Solutions BD - Your Productivity. Our Solutions."
        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-xs"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/logo-original.jpg";
        }}
      />
    </div>
  );
}
