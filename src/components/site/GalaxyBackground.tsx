import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Galaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 12000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const colorInside = new THREE.Color("#ffaa55");
    const colorOutside = new THREE.Color("#55aaff");
    
    const branches = 4;
    const spin = 1.2;
    const randomness = 0.5;
    const randomnessPower = 3;
    const maxRadius = 15;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      const radius = Math.random() * maxRadius;
      const spinAngle = radius * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      
      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius * 0.3; // Flatter in Y
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color mixing based on distance from center
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / maxRadius);
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05; // Slow rotation
    }
  });

  return (
    <points ref={pointsRef} rotation={[0.4, 0, 0.2]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

export function GalaxyBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 bg-black">
      <Canvas camera={{ position: [0, 8, 20], fov: 45 }}>
        <color attach="background" args={["black"]} />
        <Galaxy />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10 pointer-events-none" />
    </div>
  );
}
