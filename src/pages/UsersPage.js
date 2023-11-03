import './UsersPage.scss';
import './UsersPage.scss';

const UsersPage = () => {
  return <main className="UsersPage">
    <div className="UsersWrap">
      <div>
        <div className="logo"></div>
          <input type="text" placeholder="아이디"></input>
          <input type="text" placeholder="패스워드"></input>
        <div className="loginBtn">
          <p>LOGIN</p>
        </div>
        <div className="kakaoBtn">
          <p>카카오로 3초만에 시작하기</p>
        </div>
        <div className="join">
          <p>회원가입</p>
          <p>아이디 찾기</p>
          <p>비밀번호 찾기</p>
      </div>
      <p className="address">www.naver.com</p>
      </div>
    </div>
    <div className="FooterImg"></div>
  </main>;
};

export default UsersPage;
