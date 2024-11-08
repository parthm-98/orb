// Particle.tsx
'use client'
import React, { useEffect, useRef } from 'react';

export function Particle() {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particleRef.current) {
      const duration = (Math.random() * 5 + 5).toFixed(2); // 5s to 10s
      const delay = (Math.random() * 5).toFixed(2); // 0s to 5s
      const translateX = (Math.random() * 200 - 100).toFixed(2); // -100px to 100px
      const translateY = (Math.random() * 200 - 100).toFixed(2); // -100px to 100px
      const scale = (Math.random() * 0.5 + 0.5).toFixed(2); // 0.5 to 1

      particleRef.current.style.setProperty('--move-duration', `${duration}s`);
      particleRef.current.style.setProperty('--move-delay', `${delay}s`);
      particleRef.current.style.setProperty('--glow-duration', `${duration}s`);
      particleRef.current.style.setProperty('--glow-delay', `${delay}s`);
      particleRef.current.style.setProperty('--particle-transform', `translate(${translateX}px, ${translateY}px) scale(${scale})`);
    }
  }, []);

  return <div ref={particleRef} className="particle"></div>;
}
