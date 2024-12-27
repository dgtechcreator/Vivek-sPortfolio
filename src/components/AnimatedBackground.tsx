import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
          </filter>
        </defs>
        
        <g filter="url(#goo)">
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              className="animate-float"
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="50"
              fill={`rgba(59, 130, 246, ${0.1 + (i * 0.02)})`}
              style={{
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * -2}s`
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBackground;