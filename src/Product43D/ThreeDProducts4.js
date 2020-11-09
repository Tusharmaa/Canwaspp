import React, { useState, useMemo } from "react";
// import ThreeDModel from "./ThreeDModelMain";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls } from "drei";
// import * as THREE from "three";

softShadows();

function ThreeDProducts({ hide = false }) {
  function GLTFScene() {
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load("/images/Batman.glb", set), []);

    return gltf ? <primitive object={gltf.scene} /> : null;
  }
  return (
    <div className="main" style={{ color: "#172717" }}>
      {!hide ? (
        <Canvas
          className="mainScreen-canvas"
          camera={{ position: [-5, 2, -10], fov: 18 }}
        >
          <ambientLight intensity={0.45} />
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
          <ambientLight intensity={4} />
          <spotLight intensity={0.5} position={[300, 300, 4000]} />
          <GLTFScene color="red" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      ) : (
        <Canvas
          className="mainScreen-canvas hide-3D"
          camera={{ position: [-5, 2, -10], fov: 18 }}
        >
          <ambientLight intensity={0.45} />
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
          {/* <ambientLight intensity={0.5} /> */}
          <spotLight intensity={0.5} position={[300, 300, 4000]} />
          <GLTFScene color="red" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </div>
  );
}

export default ThreeDProducts;
