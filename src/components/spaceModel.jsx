import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

function SpaceObject() {
  const { gl } = useThree();
  const [scene, setScene] = React.useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    // Configure Draco loader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    loader.setDRACOLoader(dracoLoader);

    // Configure KTX2 loader
    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath(
      "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/libs/basis/"
    );
    ktx2Loader.detectSupport(gl);
    loader.setKTX2Loader(ktx2Loader);

    // Load the model
    loader.load(
      "/assets/spherical_galaxy_formation.glb",
      (gltf) => {
        setScene(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    return () => {
      dracoLoader.dispose();
      ktx2Loader.dispose();
    };
  }, [gl]);

  // Process the scene once loaded
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  if (!scene) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" wireframe />
      </mesh>
    );
  }

  return <primitive object={scene} />;
}

// Loading fallback component
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  );
}

export default function SpaceModel() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: "black" }}
      >
        <color attach="background" args={["black"]} />
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Suspense loader */}
        <Suspense fallback={null}>
          <Center>
            <SpaceObject />
          </Center>
          <Environment preset="sunset" /> {/* Nice HDRI lighting */}
        </Suspense>

        {/* Controls */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
