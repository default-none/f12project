// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import './GuideSection.scss';
// import GuideImg1 from '../../../asset/img/guide_k.png';
// import GuideImg2 from '../../../asset/img/guide_c.png';
// import GuideImg3 from '../../../asset/img/guide_d.png';

// const GuideSection = () => {

//   useEffect(() => {
//     AOS.init({
//       // aos 초기화 설정
//       duration: 1000, // 애니메이션 지속 시간 (ms)
//       once: false, // 한 번만 애니메이션 실행 여부
//     });
//   }, []);

//   const textData = [
//     { 
//       id: 1,
//       text: '별빛야행',
//       h2:'별빛야행',
//       image: GuideImg1,
//       link:'/guide/star',

//   },
//     {
//       id: 2,
//       text: '달빛기행',
//       h2:'달빛기행',
//       image: GuideImg2,
//       link:'/guide/moon',
//     },
//     { 
//       id: 3,
//       text: '밤의 석조전',
//       h2:'밤의 석조전',
//       image: GuideImg3,
//       link:'/guide/night',
//     },
//   ];

//   const [hoveredText, setHoveredText] = useState(1);
//   const [hoveredH2, setHoveredH2] = useState('별빛야행');
//   const [lastHoveredH2, setLastHoveredH2] = useState(null);
//   const [currentImage, setCurrentImage] = useState(GuideImg1);
//   const [lastImage, setLastImage] = useState(null);

//   const handleMouseEnter = (id, image, h2) => {
//     setHoveredText(id);
//     setCurrentImage(image);
//     setHoveredH2(h2);
//   };

//   const handleMouseLeave = () => {
//     // setHoveredText(null);
//     setHoveredH2(hoveredH2);
//     setLastHoveredH2(lastHoveredH2);
//     // setCurrentImage(currentImage);
//     setLastImage(lastImage);
//   };

//   return <section className='guideSection'>
//         <div className='moon'></div>
//         <div className='sectionScreen'>
//         <div className='fontWrap'>
//           <div className='fontWrapL'>
//             <h2 data-aos="fade-down">{hoveredH2}</h2>
//             <h3 data-aos="fade-down" data-aos-delay="500">630년 역사의 국보 체험 </h3>
//             <p data-aos="fade-down" data-aos-delay="500">
//             서울의 대표적인 고궁 세 곳,<br/>
//             분위기 있는 조명 속에서 역사의 아름다움을 만나보세요. <br/>
//             궁중문화를 느낄 수 있는 특별한 밤, 궁궐에서의 시간을 즐겨보세요. <br/>
//             </p>
//           </div>
//           <div className='fontWrapR'>
//         {textData.map(({ id, text, image, h2, link }) => (
//             <Link to={link} key={id}>
//         <div
//         key={id}
//         className={`guideText ${hoveredText === id ? 'hovered' : ''}`}
//         onMouseEnter={() => handleMouseEnter(id, image, h2)}
//         onMouseLeave={handleMouseLeave}
//         >
//         <p className={hoveredText === id ? 'big' : ''}>{text}</p>
//         <div className={hoveredText === id ? 'lineHover line' : 'line'}></div>
//         </div>
//         </Link>
//         ))}
//           </div>
//         </div>
//       </div>
//       {/* <div className="guideScreenImg"><img className='guideScreenWrap' src={currentImage}></img></div> */}
//       <div className="guideScreenImg"><img className='guideScreenWrap' src={currentImage}></img></div>
//   </section>;
// };

// export default GuideSection;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './GuideSection.scss';
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
      link:'/guide/star',

  },
    {
      id: 2,
      text: '달빛기행',
      h2:'달빛기행',
      image: GuideImg2,
      link:'/guide/moon',
    },
    { 
      id: 3,
      text: '밤의 석조전',
      h2:'밤의 석조전',
      image: GuideImg3,
      link:'/guide/night',
    },
  ];

  const [hoveredText, setHoveredText] = useState(1);
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
    // setHoveredText(null);
    setHoveredH2(hoveredH2);
    setLastHoveredH2(lastHoveredH2);
    // setCurrentImage(currentImage);
    setLastImage(lastImage);
  };

  return <section className='guideSection'>
        <div className='moon'></div>
        <div className='sectionScreen'>
        <div className='fontWrap'>
          <div className='fontWrapL'>
            <h2 data-aos="fade-down">{hoveredH2}</h2>
            <h3 data-aos="fade-down" data-aos-delay="500">630년 역사의 국보 체험 </h3>
            <p data-aos="fade-down" data-aos-delay="500">
            서울의 대표적인 고궁 세 곳,<br/>
            분위기 있는 조명 속에서 역사의 아름다움을 만나보세요. <br/>
            궁중문화를 느낄 수 있는 특별한 밤, 궁궐에서의 시간을 즐겨보세요. <br/>
            </p>
          </div>
          <div className='fontWrapR'>
        {textData.map(({ id, text, image, h2, link }) => (
            <Link to={link} key={id}>
        <div
        key={id}
        className={`guideText ${hoveredText === id ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(id, image, h2)}
        onMouseLeave={handleMouseLeave}
        >
        <p className={hoveredText === id ? 'big' : ''}>{text}</p>
        <div className={hoveredText === id ? 'lineHover line' : 'line'}></div>
        </div>
        </Link>
        ))}
          </div>
        </div>
      </div>
      {/* <div className="guideScreenImg"><img className='guideScreenWrap' src={currentImage}></img></div> */}
      {/* <div className="guideScreenImg" style={{ backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '680px' }}></div> */}
      <div className="guideScreenImg" style={{ backgroundImage: `url(${currentImage})`}}></div>


  </section>;
};

export default GuideSection;