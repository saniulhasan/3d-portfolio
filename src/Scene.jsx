import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Model'
import { useControls } from 'leva'
import ReactLogo from './Reactlogo'

export default function Scene() {
  const { position, rotation, scale, scaleX, scaleY, scaleZ } = useControls({
    position: { value: [0, -1, 0], step: 0.1 },
    rotation: { value: [0, 0, 0], step: 0.1 },
    scale: { 
      value: 0.1,
      min: 0.1,
      max: 10,
      step: 0.01,
      label: 'Uniform Scale',
    },
    scaleX: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01,
      label: 'X-Axis Scale'
    },
    scaleY: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01,
      label: 'Y-Axis Scale'
    },
    scaleZ: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01,
      label: 'Z-Axis Scale'
    }
  })

  return (
    <Canvas shadows camera={{ position: [8, 8, 16], fov: 85 }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
      
      <Model 
        position={position} 
        rotation={rotation} 
        scale={[scale * scaleX, scale * scaleY, scale * scaleZ]}
      />

      <group>

        <ReactLogo position={[15, 2, 2]}/>
      </group>

      <OrbitControls 
        enableZoom={true} 
        minDistance={5} 
        maxDistance={50}
      />
      <Environment preset="sunset" />
    </Canvas>
  )
}
//<Model
//position={[0, -5.0, 0]}
//rotation={[0, Math.PI/0.9, 0]}  // 45° Y rotation
//scale={[0.30 * 0.5, 0.30 * 0.5, 0.30 * 0.5]}
///>
