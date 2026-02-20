import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 3,
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}

export default ParticlesBackground;