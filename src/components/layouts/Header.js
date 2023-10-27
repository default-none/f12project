import { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { menuItems } from '../datas/LocalList';

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const SignInHandler = () => {
    setIsSignIn(!isSignIn);
  };

  // const [isViewList, setIsViewList] = useState();
  const menuViewHandler = () => {};
  return (
    <header onMouseEnter={menuViewHandler} className="Header">
      <div className="headerScreen">
        <h1 className="logoWrap">
          <i></i>
        </h1>
        <nav className="gnb">
          <ul>
            {menuItems.map((menuItems, index) => (
              <li key={index}>
                <Link>{menuItems.pageList}</Link>
                <nav className="lnb">
                  <ol>
                    {menuItems.detailList.map((detailList, detailIndex) => (
                      <li key={detailIndex}>
                        <Link>{detailList}</Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="unb">
          <ul>
            {isSignIn ? (
              <li onClick={SignInHandler}>
                <Link>로그아웃</Link>
              </li>
            ) : (
              <li onClick={SignInHandler}>
                <Link>로그인</Link>
              </li>
            )}
            <li>
              <Link>회원가입</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import './Header.scss';
// import { Link } from 'react-router-dom';
// const Header = () => {
//   return (
//     <header className="Header">
//       <div className="headerScreen">
//         <h1 className="logoWrap">
//           <i></i>
//         </h1>
//         <nav className="gnb">
//           <ul>
//             <li>
//               <Link>행사안내</Link>
//             </li>
//             <li>
//               <Link>프로그램</Link>
//             </li>
//             <li>
//               <Link>갤러리</Link>
//             </li>
//             <li>
//               <Link>예약하기</Link>
//             </li>
//             <li>
//               <Link>알림마당</Link>
//             </li>
//           </ul>
//         </nav>
//         <nav className="unb">
//           <ul>
//             <li>
//               <Link>로그인</Link>
//             </li>
//             <li>
//               <Link>회원가입</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
