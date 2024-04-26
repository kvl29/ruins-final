import React,{ useCallback, useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier'
import Girl from './character_girl'
import { useKeyboardControls } from '@react-three/drei'
import { Controls } from '../three/test-c';

const JUMP_FORCE = 0.5;
const MOVENT_SPEED = 0.1;

export default function GirlController(props) {

  // const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  // const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  // const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  // const backPressed = useKeyboardControls((state) => state[Controls.back]);
  // const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);
  // const rigidbody = useRef();
  
  //   useFrame(() => {
  //     const impulse = { x: 0, y: 0, z: 0 };
  //     if (jumpPressed) {
  //       impulse.y += JUMP_FORCE;
  //     }
  //     if (rightPressed) {
  //       impulse.x += MOVENT_SPEED;
  //     }
  //     if (leftPressed) {
  //       impulse.x -= MOVENT_SPEED;
  //     }
  //     if (backPressed) {
  //       impulse.z += MOVENT_SPEED;
  //     }
  //     if (forwardPressed) {
  //       impulse.z -= MOVENT_SPEED;
  //     }

  //     rigidbody.current.applyImpulse(impulse, true);
  //   });

  const girlRef = useRef()
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const resetHandler = useCallback(() => {
    girlRef.current.setTranslation({ x: 0, y: 4, z: 0 })
    girlRef.current.setLinvel({ x: 0, y: 0, z: 0 })
    girlRef.current.setAngvel({ x: 0, y: 0, z: 0 })
}, [girlRef])


useFrame((_, delta) => {
    const { forward, backward, left, right } = getKeys()

    // if (gamePhase === 'ready' && (forward || backward || left || right)) startGame()

    const impulse = { x: 0, y: 0, z: 0 }
    const torque = { x: 0, y: 0, z: 0 }

    const impulseStrength = 20 * delta
    const torqueStrength = 1 * delta

    if (forward) {
        impulse.z -= impulseStrength
        torque.x -= torqueStrength
    }
    if (backward) {
        impulse.z += impulseStrength
        torque.x += torqueStrength
    }
    if (left) {
        impulse.x -= impulseStrength
        torque.z -= torqueStrength
    }
    if (right) {
        impulse.x += impulseStrength
        torque.z += torqueStrength
    }

    if (girlRef.current) {
        girlRef.current.applyImpulse(impulse)
        girlRef.current.applyTorqueImpulse(torque)
      }
})

  return (
    <group position={[24, 3, -0.6]} rotation={[0, Math.PI / 1.8, 0]} >
      <RigidBody 
      ref={girlRef}
      mass={2}
      restitution={0.2}
      friction={10}
      linearDamping={4}
      angularDamping={4}
      {...props}
      // position-y={0.1}  
      colliders={false} 
      scale={[0.5,0.5,0.5]}
      enabledRotations={[false,false,false]}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]}/>
        <Girl/>
      </RigidBody>
    </group>
  );
};



