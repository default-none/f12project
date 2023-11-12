import Footer from '../components/layouts/Footer';
import Login from './KakaoLogin';
import './UsersPage.scss';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  return <main className="UsersPage">
    <div className='bgImg'>
      <div className="UsersWrap">
        <div>
          <div className="logo"></div>
            <input type="text" placeholder="아이디"></input>
            <input type="password" placeholder="패스워드"></input>
          <div className="loginBtn">
            <p>LOGIN</p>
          </div>
          <Login></Login>
          <div className="join">
            <Link to='/signUp'>
              <p>회원가입</p>
            </Link>
            <Link to='/member'>
              <p>아이디 찾기</p>
            </Link>
            <Link to='/member'>
              <p>비밀번호 찾기</p>
            </Link>
        </div>
        <p className="address">www.walkatnight.com</p>
        </div>
      </div>
      <div className="FooterImg"></div>
    </div>
    <Footer />
  </main>;
}; 

export default UsersPage;