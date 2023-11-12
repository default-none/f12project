import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import byeol from '../../../asset/img/gallery/byeol-1.png';
import GBK from '../../../asset/img/gallery/GBK.png';
import GBK1 from '../../../asset/img/gallery/GBK-1.png';
import GBK2 from '../../../asset/img/gallery/GBK-2.png';
import GBK3 from '../../../asset/img/gallery/GBK-3.png';
import GBK4 from '../../../asset/img/gallery/GBK-4.png';
import GBK5 from '../../../asset/img/gallery/GBK-5.png';
import CDK1 from '../../../asset/img/gallery/CDK-1.png';
import CDK2 from '../../../asset/img/gallery/CDK-2.png';
import CDK3 from '../../../asset/img/gallery/CDK-3.png';
import CDK4 from '../../../asset/img/gallery/CDK-4.png';
import CDK5 from '../../../asset/img/gallery/CDK-5.png';
import DSK1 from '../../../asset/img/gallery/DSK-1.png';
import DSK2 from '../../../asset/img/gallery/DSK-2.png';
import DSK3 from '../../../asset/img/gallery/DSK-3.png';
import DSK4 from '../../../asset/img/gallery/DSK-4.png';
import DSK5 from '../../../asset/img/gallery/DSK-5.png';
// import BasicButton from '../../btn/BasicButton';



const images = [
  GBK,
  byeol,
  GBK2,
  GBK1,
  GBK3,
  GBK4,
  GBK5,
  CDK1,
  CDK2,
  CDK3,
  CDK4,
  CDK5,
  DSK1,
  DSK2,
  DSK3,
  DSK4,
  DSK5

  
];
const images2 = [
  GBK,
  byeol,
  GBK2,
  GBK1,
  GBK3,
  GBK4,
  GBK5,
  CDK1,
  CDK2,
  CDK3,
  CDK4,
  CDK5,
  DSK1,
  DSK2,
  DSK3,
  DSK4,
  DSK5
];




const GallerySection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [backCurrentSlide2, setBackCurrentSlide] = useState(0);

  const slidesToShow = 3; // 한 번에 보여줄 슬라이드의 개수
  const totalSlides = images.length;

  // const totalSlidesToShow = totalSlides - slidesToShow;
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    setBackCurrentSlide((prevSlide2) => (prevSlide2 + 1) % images2.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides); // 하나씩 맞춰줌
    setBackCurrentSlide((prevSlide2) => (prevSlide2 - 1 + images2.length) % images2.length);
    
  };
  
  return <section className="GallerySection">
  <div className='slider-container'>
    <div className='GalleryTitleBox'>
      <p className='GalleryMent' data-aos="fade-down">조명속에 수놓아진 역사의 아름다움</p>
      <p className='GalleryTitle' data-aos="fade-down" data-aos-delay="350">갤러리</p>
      <Link to="/gallery" target="_blank">
        <button className='ViewBtn' data-aos="fade-down" data-aos-delay="700">VIEW MORE</button>
      </Link>
      {/* <BasicButton className="galleryButton"/> */}
      
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
