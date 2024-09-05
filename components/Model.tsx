import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { log } from 'console'
import { useEffect, useRef, useState } from 'react'
import { Group } from 'three'

useGLTF.preload('/earth.glb')

export default function Model() {
	const group = useRef<Group>(null)
	const { nodes, materials, animations, scene } = useGLTF('/earth.glb')

	const { actions, clips } = useAnimations(animations, scene)

	useEffect(() => {
    if (actions['Base Stack']) {
      actions['Base Stack'].play().paused = true
    }
  }, [actions])

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3
    }
  })

	return (
		<group ref={group}>
			<primitive object={scene} />
		</group>
	)
}
