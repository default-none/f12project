import Login from './KakaoLogin';
import './UsersPage.scss';

const UsersPage = () => {
  return <main className="UsersPage">
    <div className='bgImg'>
      <div className="UsersWrap">
        <div>
          <div className="logo"></div>
            <input type="text" placeholder="아이디"></input>
            <input type="text" placeholder="패스워드"></input>
          <div className="loginBtn">
            <p>LOGIN</p>
          </div>
          <Login></Login>
          <div className="join">
            <p>회원가입</p>
            <p>아이디 찾기</p>
            <p>비밀번호 찾기</p>
        </div>
        <p className="address">www.naver.com</p>
        </div>
      </div>
      <div className="FooterImg"></div>
    </div>
  </main>;
}; 

export default UsersPage;
