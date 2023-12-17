import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Cube = ({ position, size, color }) => {
    const ref = useRef();
    
    return(
      <mesh position={position} ref={ref}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
    </mesh>
    )
}