import React, { useEffect, useState, useRef } from 'react';

export const SparklesCore = ({
  id,
  background = "transparent",
  minSize = 0.5,
  maxSize = 1.5,
  particleDensity = 50,
  particleColor = "#FFFFFF",
  className = "",
}) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState([]);

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      setDimensions({
        width: canvas.offsetWidth,
        height: canvas.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Generate particles
    const density = Math.min(Math.max(particleDensity, 10), 100); // Clamp between 10-100
    const generatedParticles = Array.from({ length: Math.floor((density * dimensions.width * dimensions.height) / 10000) }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setParticles(generatedParticles);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [dimensions.width, dimensions.height, minSize, maxSize, particleDensity]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || particles.length === 0) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update position
        const newParticle = {
          ...particle,
          x: particle.x + Math.cos(particle.direction) * particle.speed,
          y: particle.y + Math.sin(particle.direction) * particle.speed,
        };

        // Reset particles that go off screen
        if (
          newParticle.x < 0 || 
          newParticle.x > dimensions.width || 
          newParticle.y < 0 || 
          newParticle.y > dimensions.height
        ) {
          newParticle.x = Math.random() * dimensions.width;
          newParticle.y = Math.random() * dimensions.height;
        }

        particles[index] = newParticle;

        // Draw particle
        ctx.beginPath();
        ctx.arc(newParticle.x, newParticle.y, newParticle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${Math.floor(newParticle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, dimensions, particleColor]);

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ background }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default SparklesCore;