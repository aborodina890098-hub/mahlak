import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ECommerceMarketing() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <group>
      {/* Floating Mobile Phone */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[0, 0, 0]}>
          {/* Phone Body */}
          <mesh>
            <boxGeometry args={[2, 4, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
          </mesh>
          {/* Screen */}
          <mesh position={[0, 0, 0.11]}>
            <boxGeometry args={[1.8, 3.8, 0.01]} />
            <meshStandardMaterial color="#13C6B6" emissive="#13C6B6" emissiveIntensity={0.5} />
          </mesh>
          {/* Home Button */}
          <mesh position={[0, -1.8, 0.11]}>
            <circleGeometry args={[0.1, 32]} />
            <meshStandardMaterial color="#333" />
          </mesh>
        </group>
      </Float>

      {/* Floating Marketing Icons */}
      {[
        { pos: [2.5, 1.5, 0.5], color: "#FFB020", type: "cart" },
        { pos: [-2.5, 0.5, 1], color: "#6AE4FF", type: "chart" },
        { pos: [2, -1.5, 1.5], color: "#13C6B6", type: "bag" },
        { pos: [-2, -2, 0.5], color: "#FFB020", type: "star" },
      ].map((icon, i) => (
        <Float key={i} speed={3} rotationIntensity={1} floatIntensity={1.5} position={icon.pos as any}>
          <mesh>
            {icon.type === "cart" && <boxGeometry args={[0.4, 0.4, 0.4]} />}
            {icon.type === "chart" && <cylinderGeometry args={[0.2, 0.2, 0.6, 32]} />}
            {icon.type === "bag" && <sphereGeometry args={[0.3, 32, 32]} />}
            {icon.type === "star" && <octahedronGeometry args={[0.3]} />}
            <meshStandardMaterial color={icon.color} emissive={icon.color} emissiveIntensity={2} />
          </mesh>
          <pointLight color={icon.color} intensity={0.5} distance={3} />
        </Float>
      ))}

      {/* Connecting Lines (Abstract Marketing Network) */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[3.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#13C6B6" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshStandardMaterial color="#FFB020" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#6AE4FF" intensity={0.5} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <ECommerceMarketing />
        </Suspense>
      </Canvas>
      
      {/* Overlay Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-brand-bg opacity-40" />
    </div>
  );
}
