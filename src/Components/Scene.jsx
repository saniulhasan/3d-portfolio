import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Model'
import ReactLogo from './ReactLogo'

import { Football } from './footbel'


export default function Scene() {

  

  return (
    <div style={{ width: '100vw', height: '80vh' }}> {/* Full screen height */}
      <Canvas shadows camera={{ position: [8, 8, 16], fov: 85 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />

        //<Model
position={[0, -2.0, 0]}
rotation={[0, Math.PI/0.9, 0]}  // 45° Y rotation
scale={[0.10 * 1.0, 0.10 * 1.0, 0.10 * 1]}
/>
  <group>

    <ReactLogo position={[-40.0, -1.0, 0]}
rotation={[0, 10, 0]}  // 45° Y rotation
scale={[0.38 * 2.42, 0.38 * 2.54, 0.38 * 1]} />

        <Football position={[20, -1.0, 0]}
rotation={[0, 0, 0]}  // 45° Y rotation
scale={[0.10 * 0.20, 0.10 * 0.25, 0.10 * 0.20]}/>
  </group>

        <OrbitControls enableZoom={true} minDistance={5} maxDistance={50} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
