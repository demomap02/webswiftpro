"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = t * 0.3;
      meshRef2.current.rotation.z = t * 0.1;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = t * 0.2;
      meshRef3.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={[-2, 0, -1]} scale={0.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#6366f1"
            speed={2}
            distort={0.4}
            radius={1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef2} position={[2.5, 0.5, -0.5]} scale={0.6}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={1.5}
            distort={0.3}
            radius={1}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh ref={meshRef3} position={[0, -1, -2]} scale={0.5}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#06b6d4"
            speed={2}
            distort={0.5}
            radius={1}
          />
        </mesh>
      </Float>

      <Environment preset="city" />
    </group>
  );
}

export default function ThreeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
