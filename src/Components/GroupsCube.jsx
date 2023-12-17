import { Cube } from "./Cube";

export const GroupCube = () => {
    return <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color="red"  />
        <Cube position={[-1, 0, 0]} color="orange"  />
        <Cube position={[-1, 2, 0]} color="hotpink"  />
        <Cube position={[1, 2, 0]} color="violet"  />
    </group>
}