import React from 'react'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import Model2 from './avatar2'

export default function AvatarController2() {

  return (
    <group>
      <RigidBody position-y={3} colliders={false} scale={[0.5,0.5,0.5]}>
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]}/>
        <Model2/>
      </RigidBody>
    </group>
  );
};



