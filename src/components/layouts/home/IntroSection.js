/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './intro/Model';
import './IntroSection.scss';
import Lights from './intro/Lights';
import Floor from './intro/Floor';

const IntroSection = ({ wheelCount, setWheelCount }) => {
  const modelRef = useRef();
  const model2Ref = useRef();
  const [targetPosition, setTargetPosition] = useState(0.5);
  const [onContents, setOnContents] = useState(false);

  // 마우스 휠 핸들러
  const handleWheel = (e) => {
    {
      if (modelRef.current.position.z > -5 && e.deltaY < 0) {
        setTargetPosition(targetPosition - 0.5);
      } else if (
        modelRef.current.position.z > -4 &&
        modelRef.current.position.z <= 0.5 &&
        e.deltaY > 0
      ) {
        setTargetPosition(0.5);
      } else if (modelRef.current.position.z > 0.5) {
        setTargetPosition(0.5);
      } else {
        setTargetPosition(-9);
        setWheelCount(wheelCount + 1);
      }
    }
  };
  useEffect(() => {
    if (wheelCount === 1) {
      setOnContents(true);
    }
    if (wheelCount === 5) {
      setOnContents(true);
    }
  }, [wheelCount]);

  return (
    <div className="backGround">
      <div className={onContents ? 'title O' : 'title'}>밤을 걷다.</div>
      <div className="scrollGuideWrap">
        <div className="scrollGuide1">
          <div></div>
        </div>
        <p>
          3D Move
          <br />
          Scroll Up
        </p>
      </div>
      <div className="scrollGuideWrap2">
        <div className="scrollGuide2">
          <div></div>
        </div>
        <p>
          PageMove
          <br />
          Scroll Down
        </p>
      </div>
      <Canvas
        onWheel={handleWheel}
        camera={{ position: [0, 1, 2], fov: 75, near: 0.1, far: 15 }}
      >
        <ambientLight intensity={0.5} />
        <Lights targetPosition={targetPosition} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Floor />
        <Model
          url="./lantern.gltf"
          targetPosition={targetPosition}
          modelRef={modelRef}
          model2Ref={model2Ref}
        />
      </Canvas>
    </div>
  );
};

export default IntroSection;
