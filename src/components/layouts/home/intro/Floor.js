import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
import ao from '../../../../asset/3d/floor/rock_tile_floor_ao_1k.png';
import disp from '../../../../asset/3d/floor/rock_tile_floor_disp_1k.png';
import rough from '../../../../asset/3d/floor/rock_tile_floor_rough_1k.png';
import nor from '../../../../asset/3d/floor/rock_tile_floor_nor_gl_1k.png';
import diff from '../../../../asset/3d/floor/rock_tile_floor_diff_1k.png';

const Floor = () => {
  const [aoMap, displacementMap, roughnessMap, normalMap] = useLoader(
    THREE.TextureLoader,
    [ao, disp, rough, nor],
  );

  const albedoMap = useLoader(THREE.TextureLoader, diff);

  const textures = [aoMap, displacementMap, roughnessMap, normalMap, albedoMap];
  textures.forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(50, 50);
  });

  const floorRef = useRef();

  return (
    <mesh
      ref={floorRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.3, 0]}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        map={albedoMap}
        aoMap={aoMap}
        displacementMap={displacementMap}
        roughnessMap={roughnessMap}
        normalMap={normalMap}
      />
    </mesh>
  );
};

export default Floor;
