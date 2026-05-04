const particles = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  size: index % 7 === 0 ? 3 : index % 5 === 0 ? 2 : 1,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  delay: `${(index % 9) * 0.4}s`,
  duration: `${6 + (index % 5)}s`,
}));

export default function BackgroundParticles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size * 2}px`,
            height: `${particle.size * 2}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
