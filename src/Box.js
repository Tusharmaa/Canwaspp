import React, { useRef, useState, useMemo, Suspense } from "react";
import { useFrame, useLoader } from "react-three-fiber";
// import { MeshWobbleMaterial } from "drei";
import { useSpring, a } from "react-spring/three";
import * as THREE from "three";

function Box({ position, args, color, speed, url }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.0015));

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1, 4] : [1, 1, 1],
  });

  // const texture = useMemo(
  //   () =>
  //     new THREE.TextureLoader().load(
  //       "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  //     ),
  //   []
  // );

  const texture = new THREE.TextureLoader().load(url);

  console.log("nuiinhiun", url);

  return (
    <Suspense>
      <a.mesh
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        castShadow
        position={position}
        ref={mesh}
      >
        {/* height, width, depth */}
        <boxBufferGeometry args={args} attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color={color}
          speed={speed}
          factor={0.6}
          map={texture}
        />
      </a.mesh>
    </Suspense>
  );
}

export default Box;
