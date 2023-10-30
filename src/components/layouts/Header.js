import { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { menuItems } from '../datas/LocalList';

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const SignInHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const [isNavToggle, setIsNavToggle] = useState(false);
  const ToggleHandler = () => {
    setIsNavToggle(!isNavToggle);
  };
  const [isViewNav, setIsViewNav] = useState(false);
  const menuViewHandler = () => {
    setIsViewNav(!isViewNav);
  };
  return (
    <header
      onMouseEnter={menuViewHandler}
      onMouseLeave={menuViewHandler}
      className={
        window.innerWidth > 1024
          ? isViewNav
            ? 'onHead'
            : 'offHead'
          : isNavToggle
          ? 'onHead'
          : 'offHead'
      }
    >
      <div className="headerScreen">
        <h1 className="logoWrap">
          <i></i>
        </h1>
        <nav className={isNavToggle ? 'gnb' : 'Off'}>
          <ul>
            {menuItems.map((menuItems, index) => (
              <li key={index}>
                <div className="gList">
                  <Link>{menuItems.pageList}</Link>
                </div>

                <ol className="lnb">
                  {menuItems.detailList.map((detailList, detailIndex) => (
                    <li key={detailIndex}>
                      <Link>
                        {detailList}
                        <div className="liner"></div>
                      </Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={isNavToggle ? 'unb' : 'Off'}>
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
        <button onClick={ToggleHandler}>
          <div className="navBtn">
            <div className={isNavToggle ? 'onNavFirst' : 'offNavFirst'}></div>
            <div className={isNavToggle ? 'onNavSecond' : 'offNavSecond'}></div>
            <div className={isNavToggle ? 'onNavLast' : 'offNavLast'}></div>
          </div>
        </button>
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
