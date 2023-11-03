import BasicButton from '../../btns/BasicButton';

const NoticeSection = () => {
  return (
    <section className="NoticeSection">
      <div className="noticeSectionMain">
        <div className="noticeLeft">
          <h1>알림마당</h1>
          <p>고궁의 중요한 소식을 알려드립니다.</p>
          <BasicButton />
        </div>
        <div className="noticeRight">
          <div className="noticeBoxWrap">
            <div className="noticeBox">
              <div className="noticeBoxDate">2023-10-27</div>
              <h1>공지사항 제목</h1>
              <p>
                공지사항입니다!
                <br />
                공지사항입니다!
                <br />
              </p>
              <div className="noticeBoxLogo"></div>
            </div>

            <div className="noticeBox">
              <div className="noticeBoxDate">2023-10-27</div>
              <h1>공지사항 제목</h1>
              <p>
                공지사항입니다!
                <br />
                공지사항입니다!
                <br />
              </p>
              <div className="noticeBoxLogo"></div>
            </div>

            <div className="noticeBox">
              <div className="noticeBoxDate">2023-10-27</div>
              <h1>공지사항 제목</h1>
              <p>
                공지사항입니다!
                <br />
                공지사항입니다!
                <br />
              </p>
              <div className="noticeBoxLogo"></div>
            </div>

            <div className="noticeBox">
              <div className="noticeBoxDate">2023-10-27</div>
              <h1>공지사항 제목</h1>
              <p>
                공지사항입니다!
                <br />
                공지사항입니다!
                <br />
              </p>
              <div className="noticeBoxLogo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
