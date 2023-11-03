import '../../../pages/HomePage.scss';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const ProgramSection = () => {

  return (
    <section className="programSection">
      <div className="sectionScreen">
        <div className="txtWrap">
          <h2>프로그램</h2>
          <h3>고궁 곳곳에서 열리는 새로운 프로그램과 알림</h3>
        </div>
          <div className="slideWrap">
            <Swiper
              pagination={{
                  dynamicBullets: true,
                }}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{               
                1025: {
                  slidesPerView: 2,
                },
              }}
              freeMode={true}
              loop={true}
              navigation={true}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              
            >
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>별빛야행</h3>
                    <h2>판소리로 듣는 궁 이야기</h2>
                    <p>
                      세워지고 무너지고, 세워지고 무너지기를 반복하는 궁의
                      끈질긴 생명력과 그것을 기억하는 이들에 대한 이야기.2023년
                      현재까지도 서울 한복판에 자리 잡은 경복궁의 무한한 생명력,
                      그리고 오늘 역사를 담은 이야기가 판소리로 펼쳐집니다.
                    </p>
                  </div>
                  <div className="imgBox firstImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>별빛야행</h3>
                    <h2>생과방</h2>
                    <p>
                      경복궁의 소주방 전각에 위치한 ‘생과방’은 궁중의
                      육처소(六處所) 가운데 하나이며, ‘국왕과 왕비’의 후식과
                      별식을 준비하던 곳으로 ‘생물방’ 혹은 ‘생것방’이라고도
                      불렸습니다.경복궁 생과방 프로그램은 조선왕조실록의 내용을
                      토대로 실제 임금이 드셨던 궁중병과와 궁중약차를 오늘날에도
                      즐길 수 있도록 구성된 체험 프로그램 입니다.
                    </p>
                  </div>
                  <div className="imgBox secondImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>별빛야행</h3>
                    <h2>고궁음악회 발레 X 수제천</h2>
                    <p>
                      ‘고궁음악회’는 우리 궁의 장소적 특색을 살린 궁궐 특화
                      공연입니다.아름다운 가을밤, 고즈넉한 궁궐에서 국악과
                      발레의 크로스오버 공연을 즐겨보세요.
                    </p>
                  </div>
                  <div className="imgBox thirdImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>달빛기행</h3>
                    <h2>궁중풍류</h2>
                    <p>
                      전통음악의 뜻을 가진 연주자들이 만나 각자 쌓아온 음악적
                      지식과 예술의 가치를 소통하며 현장에서 관림하실 수 있는
                      다양한 장르의 신진 아티스트 공연입니다.
                    </p>
                  </div>
                  <div className="imgBox fourthImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>달빛기행</h3>
                    <h2>왕가의 산책</h2>
                    <p>
                      왕과 왕비, 왕세자와 세자빈과 함께 걸으며 조선시대 궁궐의
                      일상을 즐겨보세요. 함께 걷는 순간, 여러분이 서계시는 곳은
                      조선의 어느 좋은 날이 될 것입니다.
                    </p>
                  </div>
                  <div className="imgBox fifthImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>밤의 석조전</h3>
                    <h2>왕궁수문장 교대식</h2>
                    <p>
                      덕수궁 왕궁수문장 교대식은 조선시대에 행해졌던 궁성문
                      개폐의식, 궁성 수위의식, 순라의식 등의 기록 자료를
                      바탕으로 1996년부터 재현하고 있는 행사입니다.
                    </p>
                  </div>
                  <div className="imgBox sixthImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>밤의 석조전</h3>
                    <h2>석조전 음악회</h2>
                    <p>
                      석조전 음악회는 1918년 피아니스트 김영환이 고종의 생신
                      축하연에서 피아노 연주를 했다는 기록을 바탕으로 석조전
                      중앙홀에서 열리는 클래식 공연입니다.
                    </p>
                  </div>
                  <div className="imgBox seventhImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>밤의 석조전</h3>
                    <h2>대한제국 외국공사접견례</h2>
                    <p>
                      대한제국 외국공사접견례는 대한제국 시기 외교 상황을
                      연극으로 재구성하여 역사의 한 장면을 직접 볼 수 있도록
                      재현하는 행사입니다. 1900년을 배경으로 외국공사들이 고종을
                      알현하는 의례와 연회를 재현하여, 당시 공사 접견 방법과
                      더불어 군악대 연주, 검무, 사자춤 등의 당시 연회 무대가
                      펼쳐집니다.
                    </p>
                  </div>
                  <div className="imgBox eighthImg"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slideBox">
                  <div className="txtBox">
                    <h3>온라인</h3>
                    <h2>[체험] 모두의 푹속도 2023</h2>
                    <p>
                      한국의 고궁을 배경으로 누구나 쉽고 재밌게 풍속도 속 인물을
                      만들어보고, 그 안에 깃든 이야기를 통해 소통하길 바라는
                      마음으로 기획한 모두의 풍속도 조선시대 김홍도가 풍속화에
                      인물의 모습을 다채롭게 담아냈던 것처럼, 여러분도 일상 속
                      소소한 모습을 그림으로 만들어보세요.
                    </p>
                  </div>
                  <div className="imgBox ninthImg"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
    </section>
  );
};

export default ProgramSection;
