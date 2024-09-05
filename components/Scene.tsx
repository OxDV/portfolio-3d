'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'
import { useProgress, Html, ScrollControls } from '@react-three/drei'
function Loader() {
	const { progress, active } = useProgress()

	return <Html center>{progress.toFixed(1)} % loaded</Html>
}
export default function Scene() {
	return (
		<Canvas style={{ height: '100vh', width: '100vw' }}>
			<directionalLight position={[-2, 3, 0]} intensity={10} />
			<Suspense fallback={<Loader />}>
				<Model />
			</Suspense>
		</Canvas>
	)
}
