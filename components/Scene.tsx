'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'
import { useProgress, Html } from '@react-three/drei'
function Loader() {
	const { progress, active } = useProgress()

	return <Html center>{progress.toFixed(1)} % loaded</Html>
}
export default function Scene() {
	return (
		<Canvas
			camera={{ position: [0, 0, 5] }}
			style={{ height: '100%', width: '100%' }}
		>
			<directionalLight position={[-2, 3, 0]} intensity={10} />
			<Suspense fallback={<Loader />}>
				<Model />
			</Suspense>
		</Canvas>
	)
}
