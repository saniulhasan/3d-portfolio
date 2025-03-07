import React from 'react'
import { useGLTF, Float } from '@react-three/drei'

export function Football(props) {
  const { nodes, materials } = useGLTF('models/scene.gltf')

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hedra2_Standardmaterial_0.geometry}
          material={materials.Standardmaterial}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/scene.gltf')
