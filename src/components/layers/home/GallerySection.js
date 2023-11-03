import React, { useState } from 'react';
import '../../../pages/HomePage.scss';
import Byeol2 from '../../../asset/img/byeol-2.png';
import Byeo24 from '../../../asset/img/byeol-24.png';
import Byeo31 from '../../../asset/img/byeol-31.png';
import Byeo32 from '../../../asset/img/byeol-32.png';


const images = [
  Byeol2,
  Byeo24,
  Byeo31,
  Byeo32,

  Byeol2,
  Byeo24,
  Byeo31,
  Byeo32,
  // 추가 이미지들을 여기에 추가할 수 있습니다
];
const images2 = [
  Byeol2,
  Byeo24,
  Byeo31,
  Byeo32,

  Byeol2,
  Byeo24,
  Byeo31,
  Byeo32,
];




const GallerySection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [backCurrentSlide2, setBackCurrentSlide] = useState(0);

  const slidesToShow = 3; // 한 번에 보여줄 슬라이드의 개수
  const totalSlides = images.length;

  const totalSlidesToShow = totalSlides - slidesToShow;
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlidesToShow ? 0 : prevSlide + 1));
    setBackCurrentSlide((prevSlide2) => (prevSlide2 + 1) % images2.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlidesToShow : prevSlide - 1));
    setBackCurrentSlide((prevSlide2) => (prevSlide2 - 1 + images2.length) % images2.length);
    
  };
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 4000); // 3초마다 다음 슬라이드로 이동

  //   return () => clearInterval(interval);
  // }, []);
  return <section className="GallerySection">
  <div className='slider-container'>
    <div className='GalleryTitleBox'>
      <p className='GalleryMent'>조명속에 수놓아진 역사의 아름다움</p>
      <p className='GalleryTitle'>갤러리</p>
      <p className='ViewBtn'>VIEW MORE</p>
    </div>
    <div className='slider-container2'>
      <div className='GallerySlideBox2'>
        <div className='slider-track2' style={{ transform: `translateX(-${backCurrentSlide2 * 100}%)` }}>
          {images.map((image2, index) => (
            <div className='slider-slide2' key={index}>
              <img className='slider-image2' src={image2} alt={`Slide ${index + 1}`} />
            </div>
        ))}
      </div>
    </div>
  </div>
    <div className='GallerySlideBox'>
      <div className='slider-track' style={{ transform: `translateX(-${currentSlide * (400 / slidesToShow)}%)` }}>
        {images.map((image, index) => (
          <div className='slider-slide' key={index}>
            <img className='slider-image' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    <button className='slider-button prev' onClick={prevSlide}>
    </button>
    <button className='slider-button next' onClick={nextSlide}>
    </button>
  </div>

  </section>;
};

export default GallerySection;
