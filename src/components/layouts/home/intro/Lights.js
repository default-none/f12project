/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';

const Lights = ({ targetPosition }) => {
  const LightRef = useRef();
  const LightRef2 = useRef();
  useFrame(() => {
    LightRef.current.position.lerp(
      new Vector3(0.25, 0.3, targetPosition + 0.2),
      0.03,
    );
    LightRef2.current.position.lerp(
      new Vector3(0.1, 0.3, targetPosition),
      0.03,
    );
  });
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight ref={LightRef} position={[0.25, 0.3, 0.7]} intensity={0.3} />
      <pointLight ref={LightRef2} position={[0.1, 0.3, 0.5]} intensity={0.3} />
      <pointLight position={[3, -0.7, -10]} intensity={1} />
      <pointLight position={[-5, -0.7, -10]} intensity={1} />
      <pointLight position={[3, -0.7, -6]} intensity={1} />
      <pointLight position={[-5, -0.7, -6]} intensity={1} />
      <pointLight position={[3, -0.7, -2]} intensity={1} />
      <pointLight position={[-5, -0.7, -2]} intensity={1} />
    </>
  );
};

export default Lights;
