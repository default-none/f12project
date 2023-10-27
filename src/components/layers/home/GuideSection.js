import '../../../pages/HomePage.scss';

const GuideSection = () => {
  return <section className='guideSection'>
        <div className='sectionScreen'>
        <div className='fontWrap'>
          <div className='fontWrapL'>
            <h2>별빛야행</h2>
            <h3>500년 역사의 국보 체험 </h3>
            <p>봄 깊은 밤,<br/>
            경복궁 별빛야행에 여러분을 초대합니다. <br/>
            쏟아지는 별빛아래에서 고종이 거닐었던 <br/>
            향원정의 정취를 느껴보세요.</p>
          </div>
          <div className='fontWrapR'>
                <p>경복궁 <b>별빛야행</b></p>
                <p>창덕궁 <b>달빛기행</b></p>
                <p>덕수궁 <b>밤의 석조전</b></p>
          </div>
        </div>
      </div>
      <div className='guideScreenWrap k'></div>
      <div className='guideScreenWrap d'></div>
      <div className='guideScreenWrap c'></div>
  </section>;
};

export default GuideSection;