import './BookingSection.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BookingSection = () => {

  useEffect(() => {
    AOS.init({
      // aos 초기화 설정
      duration: 1000, // 애니메이션 지속 시간 (ms)
      once: false, // 한 번만 애니메이션 실행 여부
    });
  }, []);

  return (
    <section className="bookingSection">
      <div className="bookingSectionScreen">
        <h1 data-aos="fade-down">예약하기</h1>
        <div className="bookingWrap">


          <div className="hidden" data-aos="fade-down" data-aos-delay="500">
            <div className="bookingTicket">
              <div className="bookingTicketText">
                <h1>
                  경복궁 <span>별빛야행</span>
                </h1>
                <div className="bookingTicketLogo bookingStarLogo"></div>
                <a className="bookingTicketLink" href="https://www.ticketlink.co.kr/product/45379" target="_blank" rel="noopener noreferrer">
                  <div>
                    <div>예약하기</div>
                  </div>
                  <div>+</div>
                </a>
              </div>
              <div className="ticket ticket1"></div>
            </div>
          </div>

          <div className="hidden hiddenCenter" data-aos="fade-down" data-aos-delay="1000">
            <div className="bookingTicket">
              <div className="bookingTicketText">
                <h1>
                  창덕궁 <span>달빛기행</span>
                </h1>
                <div className="bookingTicketLogo bookingMoonLogo"></div>
                <a className="bookingTicketLink" href="https://www.ticketlink.co.kr/product/45329" target="_blank" rel="noopener noreferrer">
                  <div>
                    <div>예약하기</div>
                  </div>
                  <div>+</div>
                </a>
              </div>
              <div className="ticket ticket2"></div>
            </div>
          </div>

          <div className="hidden" data-aos="fade-down" data-aos-delay="1500">
            <div className="bookingTicket">
              <div className="bookingTicketText">
                <h1>
                  덕수궁 <span>밤의 석조전</span>
                </h1>
                <div className="bookingTicketLogo bookingNightLogo"></div>
                <a className="bookingTicketLink" href="https://www.ticketlink.co.kr/product/45642" target="_blank" rel="noopener noreferrer">
                  <div>
                    <div>예약하기</div>
                  </div>
                  <div>+</div>
                </a>
              </div>
              <div className="ticket ticket3"></div>
            </div>
          </div>
        

          {/* <div className="hidden" data-aos="fade-down" data-aos-delay="1000">
            <div className="bookingTicket ticket2">
              <h1>
                창덕궁 <span>달빛기행</span>
              </h1>
              <div className="bookingTicketLogo bookingMoonLogo"></div>
              <a className="bookingTicketLink" href="https://www.ticketlink.co.kr/product/45329" target="_blank" rel="noopener noreferrer">
                <div>
                  <div>예약하기</div>
                </div>
                <div>+</div>
              </a>
            </div>
          </div>

          
          <div className="hidden" data-aos="fade-down" data-aos-delay="1500">
            <div className="bookingTicket ticket3">
              <h1>
                덕수궁 <span>밤의 석조전</span>
              </h1>
              <div className="bookingTicketLogo bookingNightLogo"></div>
              <a className="bookingTicketLink" href="https://www.ticketlink.co.kr/product/45642" target="_blank" rel="noopener noreferrer">
                <div>
                  <div>예약하기</div>
                </div>
                <div>+</div>
              </a>
            </div>
          </div> */}


        </div>
      </div>
    </section>
  );
};

export default BookingSection;