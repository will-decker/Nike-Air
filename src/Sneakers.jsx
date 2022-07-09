import * as THREE from 'three';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

function Sneaker({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/air-jordan-red-v2-transformed.glb');

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  // const [clicked, setClicked] = useState(false);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height * 2),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.001)
    );
    ref.current.position.set(data.x * width, (data.y += 0.025), z);
    if (data.y > height) {
      data.y = -height;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.Object_6.geometry}
      material={materials['main_object.001.mat']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={30}
    />
  );
}

export default function Sneakers({ count = 40, depth = 80 }) {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach="background" args={['#0c093d']} />
      {/* <ambientLight intensity={0.2} /> */}
      <spotLight position={[10, 20, 10]} intensity={2} color="purple" />

      {Array.from({ length: count }, (_, i) => (
        <Sneaker key={i} z={-(i / count) * depth - 20} />
      ))}

      <Environment preset="sunset" />
      <EffectComposer>
        <DepthOfField
          target={[0, 0, depth / 2]}
          focalLength={0.3}
          bokehScale={3.6}
          height={700}
        />
      </EffectComposer>
      <Rig />
    </Canvas>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.07
    );
  });
}
