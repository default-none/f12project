import { useEffect, useState } from 'react';
import './UsersPage.scss';

const Kakaologin = () => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;
  const initKakao = async () => {
    const jsKey = 'b787fba24900d23e795fc83fdd61b484';
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      console.log('카카오 초기화' + Kakao.isInitialized());
    }
  };

  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        Kakao.Auth.setAccessToken(res.access_token); //로그인 성공
        console.log('카카오 로그인 완료');
        Kakao.API.request({
          url: '/v2/user/me',
          success(res) {
            console.log('카카오 데이터 요청 성공');
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            localStorage.setItem('nickname', kakaoAccount.profile.nickname);
            localStorage.setItem(
              'profileImage',
              kakaoAccount.profile.profile_image_url
            );
          },
        });
      },
      fail(err) {
        //로그인 실패
        console.log(err);
      },
    });
  };

  const kakaoLogout = () => {
    Kakao.Auth.logout(()=>{
        localStorage.removeItem('nickname');
        localStorage.removeItem('profileImage');
        setUser(null);
    });
  };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  });
  useEffect(() => {
    if (isLogin) {
      setUser({
        nickName: localStorage.getItem('nickname'),
        profileImage: localStorage.getItem('profileImage'),
      });
    }
  }, [isLogin]);

  return (
    <div>
      {user ? (
        <div>
          <button className='kaLogin' onClick={kakaoLogout}><p>카카오로그아웃</p></button>
          <img src={user.profileImg} alt="" />
          <h2>nickNAme : {user.nickNAme}</h2>
        </div>
      ) : (
        <button className='kaLogin' onClick={kakaoLogin}><p>카카오톡으로 3초만에 시작하기</p>
        </button>
      )}
    </div>
  );
};

export default Kakaologin;
