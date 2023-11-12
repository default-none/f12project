import Footer from '../components/layouts/Footer';

const SignUpPage = () => {
    return <main className="SignUpPage">
      <div className="SignUpPageScreen">
        <div className="UsersSignWrap">
          <div className='logo'></div>
          <div className='SignInput'>
            <input type='text' placeholder='아이디'></input>
            <input type='text' placeholder='비밀번호'></input>
            <input type='text' placeholder='[선택] 비밀번호 분실 시 확인용 이메일'></input>
          </div>
          <div>
            <input type='text' placeholder='이름'></input>
            <input type='text' placeholder='생년월일'></input>
            <input type='text' placeholder='통신사선택'></input>
          </div>
          <div>
            <button>회원가입</button>
          </div>
        </div>
        <div className='BkImg'></div>
      </div>
      <Footer />
    </main>;
};
 
export default SignUpPage;