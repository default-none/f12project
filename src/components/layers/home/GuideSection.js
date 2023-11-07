import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../../../pages/HomePage.scss';
import GuideImg1 from '../../../asset/img/guide_k.png';
import GuideImg2 from '../../../asset/img/guide_c.png';
import GuideImg3 from '../../../asset/img/guide_d.png';

const GuideSection = () => {

  useEffect(() => {
    AOS.init({
      // aos 초기화 설정
      duration: 1000, // 애니메이션 지속 시간 (ms)
      once: false, // 한 번만 애니메이션 실행 여부
    });
  }, []);

  const textData = [
    { 
      id: 1,
      text: '별빛야행',
      h2:'별빛야행',
      image: GuideImg1,

  },
    {
      id: 2,
      text: '달빛기행',
      h2:'달빛기행',
      image: GuideImg2,
    },
    { 
      id: 3,
      text: '밤의 석조전',
      h2:'밤의 석조전',
      image: GuideImg3,
    },
  ];

  const [hoveredText, setHoveredText] = useState(null);
  const [hoveredH2, setHoveredH2] = useState('별빛야행');
  const [lastHoveredH2, setLastHoveredH2] = useState(null);
  const [currentImage, setCurrentImage] = useState(GuideImg1);
  const [lastImage, setLastImage] = useState(null);

  const handleMouseEnter = (id, image, h2) => {
    setHoveredText(id);
    setCurrentImage(image);
    setHoveredH2(h2);
  };

  const handleMouseLeave = () => {
    setHoveredText(null);
    setHoveredH2(hoveredH2);
    setLastHoveredH2(lastHoveredH2);
    setCurrentImage(currentImage);
    setLastImage(lastImage);
  };

  return <section className='guideSection'>
        {/* <div className='moon'></div> */}
        <div className='sectionScreen'>
        <div className='fontWrap'>
          <div className='fontWrapL' data-aos="fade-down">
            <h2>{hoveredH2}</h2>
            <h3>500년 역사의 국보 체험 </h3>
            <p>
            서울의 대표적인 고궁 세 곳,<br/>
            분위기 있는 조명 속에서 역사의 아름다움을 만나보세요. <br/>
            궁중문화를 느낄 수 있는 특별한 밤, 궁궐에서의 시간을 즐겨보세요. <br/>
            </p>
          </div>
          <div className='fontWrapR'>
            {textData.map(({ id, text, image, h2}) => (
              <p
                key={id}
                style={{
                  fontSize: hoveredText === id ? '40px' : '28px',
                  transition: 'font-size 0.3s ease-in-out',
                  cursor: 'pointer',
                  color: hoveredText === id ? '#33bbc5' : '#ffffff',
                  borderBottom: hoveredText === id ? '1px solid #33bbc5' : 'none',
                  fontWeight: hoveredText === id ? '700' : '400',
                }}
                // eslint-disable-next-line no-undef
                onMouseEnter={() => handleMouseEnter(id, image, h2)}
                onMouseLeave={handleMouseLeave}
              >
              {text}
                      </p>
            
                  ))}
          </div>
        </div>
      </div>
      <img className='guideScreenWrap' src={currentImage}></img>
  </section>;
};

export default GuideSection;