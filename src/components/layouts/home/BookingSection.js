const BookingSection = () => {
  return (
    <section className="bookingSection">
      <div className="bookingSectionScreen">
        <h1>예약하기</h1>
        <div className="bookingWrap">
          <div className="bookingTicket ticket1">
            <h1>
              경복궁 <span>별빛야행</span>
            </h1>
            <div className="bookingTicketLogo bookingStarLogo"></div>
            <div className="bookingTicketLink ">
              <div>
                <a
                  href="https://www.ticketlink.co.kr/product/45379"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  예약하기
                </a>
              </div>
              <div>+</div>
            </div>
          </div>

          <div className="bookingTicket ticket2">
            <h1>
              창덕궁 <span>달빛기행</span>
            </h1>
            <div className="bookingTicketLogo bookingMoonLogo"></div>
            <div className="bookingTicketLink ">
              <div>
                <a
                  href="https://www.ticketlink.co.kr/product/45329"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  예약하기
                </a>
              </div>
              <div>+</div>
            </div>
          </div>

          <div className="bookingTicket ticket3">
            <h1>
              덕수궁 <span>밤의 석조전</span>
            </h1>
            <div className="bookingTicketLogo bookingNightLogo"></div>
            <div className="bookingTicketLink ">
              <div>
                <a
                  href="https://www.ticketlink.co.kr/product/45642"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  예약하기
                </a>
              </div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
