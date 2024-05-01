import React,{ useState, useRef, useEffect, Suspense, useMemo } from 'react'
import { Html ,PresentationControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree, extend  } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import { Sky, PointerLockControls, KeyboardControls, Stats, OrbitControls, Environment } from "@react-three/drei"
import { Model } from './model'
import Experience from './forMainpage'
import _JSXStyle from 'styled-jsx/style'
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from 'three';



const BG_SPEED = 0.1; 
const Background = () => {
  const ref = useRef();

  useFrame((_state, delta) => {
      ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z += delta * BG_SPEED;
    });

  return (
    <mesh scale={50} ref={ref} >
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
         <Depth
         colarA="#f21a62"
         colorB="#0081fc"
         alpha={1}
         mode="normal"
         near={120}
         far={200}
         origin={[100,100,-100]}
         />
         <Noise
         mapping="local"
         type="white"
         scale={100}
         colorA="white"
         colorB="black"
         mode="subtract"
         alpha={0.42}
         />
         </LayerMaterial>
    </mesh>
  );
};



export default function TestF() {



  return (
    <>
    <div className='h-svh'>
      <div>
      </div>
      <Canvas className='bg-neutral-100' shadowmap="true" camera={{ position: [80, 11.8, -1.5], fov:48 }} >
      <Sky sunPosition={[100, 20, 100]} />
      <PresentationControls 
      // global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}
      snap global zoom={0.8} rotation={[0, -Math.PI / 16, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 8, Math.PI / 8]}
      >
        <Suspense>
          <Physics >
            <Experience/>
          </Physics>
          
          <Model position={[0, 6, 0]} rotation={[0,230,0]}/>
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
          <ambientLight intensity={1} />
          <Background/>
        </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
    <style jsx>{`
    *
{
    margin: 0;
    padding: 0;
}
.webgl
{
  position: fixed;
    top: 0;
    left: 0;
    outline: none;
}
      `}</style>
    
</>
  )
}
