import { useFrame, useLoader } from '@react-three/fiber';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import url from '../../../../asset/3d/lantern.gltf';

import * as THREE from 'three';

function Model({ targetPosition, modelRef }) {
  const gltf = useLoader(GLTFLoader, url);

  useFrame(({ camera }) => {
    modelRef.current.position.lerp(new Vector3(0.3, 0.4, targetPosition), 0.03);
    camera.lookAt(0, 2, -9);
    camera.position.copy(
      modelRef.current.position.clone().add(new THREE.Vector3(-0.3, 0.5, 1)),
    );
  });

  return (
    <primitive object={gltf.scene} ref={modelRef} position={[0.3, 0.4, 0.5]} />
  );
}

export default Model;
