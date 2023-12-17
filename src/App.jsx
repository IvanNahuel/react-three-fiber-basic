import { useRef, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Cube, Sphere } from './Components'
import { MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { useControls } from "leva";

const Scene = () => {
  const directionalLightRef = useRef();
  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.1
    }
  });

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

  return <>
    <directionalLight 
      position={[0, 1, 2]} 
      size={[1, 1, 1]} 
      intensity={lightIntensity} 
      ref={directionalLightRef}
      color={lightColor}
    />
      <ambientLight intensity={0.1}/>
      {/*<GroupCube />*/}
      {/*<Cube position={[0,0,0]} size={[1,1,1]} color={"orange"} />*/}
      {/*<Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"orange"}/>  */}
      <Cube 
        position={[0,0,0]} 
        size={[1,1,1]} 
        color={"orange"}
      >
      </Cube>
      <OrbitControls 
        enabledZoom={false}
      />
  </>
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App
