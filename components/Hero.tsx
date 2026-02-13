import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowDown } from 'lucide-react';

// Fix for React Three Fiber elements not being recognized in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      torusGeometry: any;
      ambientLight: any;
      pointLight: any;
      color: any;
    }
  }
}

const EngineeringObject = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[2.2, 0]} />
          <meshStandardMaterial 
            color="#101010" 
            roughness={0.4} 
            metalness={0.8}
            wireframe
          />
        </mesh>
        
        <mesh>
          <icosahedronGeometry args={[2.2, 0]} />
          <meshBasicMaterial 
            color="#FF5722" 
            wireframe
            transparent
            opacity={0.05}
          />
        </mesh>
        
        {/* Core Particle */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial 
            color="#FF5722" 
            emissive="#FF5722"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>

        {/* Orbiting Ring */}
        <group rotation={[Math.PI / 3, 0, 0]}>
           <mesh>
             <torusGeometry args={[3.5, 0.02, 16, 100]} />
             <meshBasicMaterial color="#333" />
           </mesh>
        </group>
        <group rotation={[-Math.PI / 3, 0, 0]}>
           <mesh>
             <torusGeometry args={[3, 0.02, 16, 100]} />
             <meshBasicMaterial color="#333" />
           </mesh>
        </group>
      </Float>
    </group>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-void overflow-hidden flex items-center justify-center">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FF5722" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a90e2" />
          
          <Suspense fallback={null}>
            <EngineeringObject />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display text-5xl md:text-8xl text-off-white tracking-widest mb-6 animate-fade-in-up">
          АВТО<span className="text-cyber-orange">МЕХАНИК</span>
        </h1>
        <p className="font-sans text-cool-gray text-lg md:text-xl tracking-[0.2em] uppercase mb-12 animate-fade-in-up opacity-80" style={{ animationDelay: '0.2s' }}>
          Инженерное искусство ремонта
        </p>
        <div className="h-[1px] w-24 bg-cyber-orange mx-auto mb-12 animate-scale-x" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="text-off-white w-6 h-6" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-scale-x {
          animation: scaleX 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};