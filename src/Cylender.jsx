import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from "three"
const Cylender = () => {

   const tex = useTexture("./image.png")
 let cyl =useRef(null)
   useFrame((state,delta)=>{
    cyl.current.rotation.y +=delta;
   })

  return (
    <group rotation={[0, 0, (25 * Math.PI) / 180]} >
      <mesh ref={cyl} >
    <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
    <meshStandardMaterial map={tex} transparent  side={THREE.DoubleSide}/>
  </mesh>
  </group>
  )
}

export default Cylender
