import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"

export const Sphere = ({ position, size, color }) => {
    const ref = useRef();
    const [isHover, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useFrame((state, delta)=> {
        const speed = isHover ? 1 : 0.2;
        ref.current.rotation.y += delta * speed;
    });

    const onClick = () => {
        setIsClicked(!isClicked);
    }

    const onEnter = (e) => {
        e.stopPropagation();
        setIsHovered(true);
    }

    const onLeave = (e) => {
        e.stopPropagation();
        setIsHovered(false);
    }

    return (
        <mesh 
            position={position} 
            ref={ref} 
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            onClick={onClick}
            scale={isClicked ? 1.5 : 1}
        >
            <sphereGeometry args={size}/>
            <meshStandardMaterial 
                color={ isHover ? "orange" : "lightblue" }
                wireframe
            />
        </mesh>
    )
}