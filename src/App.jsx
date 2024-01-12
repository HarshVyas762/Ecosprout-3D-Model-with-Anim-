import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import Falcon from '../public/Falcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false}/>
      <Suspense fallback={null}>
      <Falcon />
      </Suspense>
      <Environment preset='sunset' />
    </Canvas>
    </>
  )
}

export default App
