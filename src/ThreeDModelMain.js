import React from "react";
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls, useCubeTextureLoader } from "drei";
import "./ThreeDModel.css";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "react-three-fiber";
// import { MeshWobbleMaterial } from "drei";
import { useSpring, a } from "react-spring/three";
import * as THREE from "three";
import { CubeTextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

softShadows();

function ThreeDModel({ hide = false, imageUrl }) {
  function Box({ position, args, color, speed, url }) {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.y += 0.0015));

    const [expand, setExpand] = useState(false);

    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1, 4] : [1, 1, 1],
    });

    // var loader = new THREE.GLTFLoader();
    // loader.load = new THREE.CubeTextureLoader()
    //   .setPath("/texture/cube/")
    //   .load([
    //     "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //     "http://jaanga.github.io/moon/heightmaps/WAC_GLD100_E000N1800_004P-1024x512.png",
    //   ]);

    const texture = useMemo(
      () =>
        new THREE.TextureLoader().load(
          "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ),
      []
    );

    // const [texture,] = useLoader(THREE.TextureLoader, [
    //   "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   "http://jaanga.github.io/moon/heightmaps/WAC_GLD100_E000N1800_004P-1024x512.png",
    // ]);

    return (
      <group>
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
      </group>
    );
  }

  return (
    <div className="threeDModel">
      {!hide ? (
        <Canvas
          className="mainScreen-canvas"
          resize={{ scroll: false }}
          shadowMap
          colorManagement
          camera={{ position: [-5, 2, 10], fov: 50 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          {/* <group> */}
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.25} />
            {/* This will need to cast shadow */}
            {/* <meshStandardMaterial attach="material" color={"pink"} /> */}
          </mesh>
          <Box
            position={[0, 1, 1]}
            args={[5, 3.5, 0.1]}
            color="white"
            speed={7}
          />

          {/* </group> */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      ) : (
        <Canvas
          className="mainScreen-canvas hide-3D"
          resize={{ scroll: false }}
          shadowMap
          colorManagement
          camera={{ position: [-5, 2, 10], fov: 50 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={0.25} />
              {/* This will need to cast shadow */}
              {/* <meshStandardMaterial attach="material" color={"pink"} /> */}
            </mesh>
            <Box
              position={[0, 1, 1]}
              args={[5, 3.5, 0.2]}
              color="white"
              speed={7}

              // url="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            {/* <Box position={[-2, 1, -5]} color="pink" speed={6} />
          <Box position={[5, 1, -2]} color="pink" speed={6} /> */}
          </group>
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </div>
  );
}

export default ThreeDModel;
