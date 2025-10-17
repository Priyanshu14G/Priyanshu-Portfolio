"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useMemo, useRef, useEffect, useState } from "react"
import type * as THREE from "three"

function FloatingPoints({ isDark = true }) {
  const ref = useRef<THREE.Points>(null)
  const count = 800 // Reduced count for better performance
  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 1.8 + Math.random() * 2.5 // Tighter distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      pts.set([x, y, z], i * 3)
    }
    return pts
  }, [count])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02 // Slower rotation
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.08
    }
  })

  const pointColor = isDark ? "#4fd8ff" : "#0066cc" // Adjusted colors for dark/light
  const pointSize = isDark ? 0.018 : 0.015

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial 
        transparent 
        size={pointSize} 
        sizeAttenuation 
        depthWrite={false} 
        color={pointColor}
        opacity={isDark ? 0.8 : 0.6}
      />
    </Points>
  )
}

function HoloSphere({ isDark = true }) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.08 // Slower rotation
    }
  })

  const sphereColor = isDark ? "#00ccff" : "#0088cc"
  const opacity = isDark ? 0.3 : 0.2

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshStandardMaterial 
        color={sphereColor} 
        wireframe 
        opacity={opacity} 
        transparent 
      />
    </mesh>
  )
}

export function HeroScene() {
  const [isDark, setIsDark] = useState(true)
  
  // Detect dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const backgroundColor = isDark ? "#000000" : "#0a0a0a"
  const ambientIntensity = isDark ? 0.25 : 0.4
  const directionalIntensity = isDark ? 0.7 : 0.9

  const gradientStyles = isDark 
    ? "bg-[radial-gradient(60%_40%_at_50%_0%,_rgba(0,232,255,0.12),_transparent_60%),radial-gradient(40%_30%_at_10%_70%,_rgba(255,0,153,0.08),_transparent_70%)]"
    : "bg-[radial-gradient(60%_40%_at_50%_0%,_rgba(0,150,255,0.08),_transparent_60%),radial-gradient(40%_30%_at_10%_70%,_rgba(200,0,100,0.06),_transparent_70%)]"

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 4.5], fov: 60 }} // Closer camera for better performance
        dpr={[1, 2]} // Adaptive pixel ratio
        performance={{ min: 0.5 }} // Performance management
      >
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[3, 3, 3]} intensity={directionalIntensity} />
        <group position={[0, 0, 0]}>
          <HoloSphere isDark={isDark} />
          <FloatingPoints isDark={isDark} />
        </group>
      </Canvas>
      <div className={`pointer-events-none absolute inset-0 ${gradientStyles}`} />
    </div>
  )
}