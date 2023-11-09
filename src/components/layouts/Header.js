// import React, { useEffect, useState } from 'react';
// import './Header.scss';
// import { Link } from 'react-router-dom';
// import { menuItems } from '../datas/LocalList';

// const Header = () => {
//   const [isSignIn, setIsSignIn] = useState(false);
//   const SignInHandler = () => {
//     setIsSignIn(!isSignIn);
//   };

//   const [isViewNav, setIsViewNav] = useState(false);
//   const menuViewHandler = () => {
//     setIsViewNav(!isViewNav);
//   };

//   const [isNavToggle, setIsNavToggle] = useState(false);
//   const ToggleHandler = () => {
//     setIsNavToggle(!isNavToggle);
//   };

//   const [isLnbItem, setIsLnbItem] = useState();
//   const ShowLnbHandler = (index) => {
//     if (index === isLnbItem) {
//       setIsLnbItem(undefined);
//     } else {
//       setIsLnbItem(index);
//     }
//   };

//   const [isNavVisible, setNavVisibility] = useState(true);

//   useEffect(() => {
//     let timeoutId;

//     const handleScroll = () => {
//       setNavVisibility(false);

//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }

//       timeoutId = setTimeout(() => {
//         setNavVisibility(true);
//       }, 1000); // 3초 후에 내비게이션을 다시 나타내기
//     };

//     const handleMouseEnter = () => {
//       setNavVisibility(true);
//     };

//     const handleMouseLeave = () => {
//       if (!window.scrollY) {
//         setNavVisibility(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mouseenter', handleMouseEnter);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mouseenter', handleMouseEnter);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   return (
//     <header
//       onMouseEnter={menuViewHandler}
//       onMouseLeave={menuViewHandler}
//       className={
//         window.innerWidth > 1024
//           ? isViewNav
//             ? 'onHead'
//             : 'offHead'
//           : isNavToggle
//           ? 'onHead'
//           : 'offHead'
//       }
//       style={{ opacity: isNavVisible ? 1 : 0, transition: 'opacity 1s ease' }}
//     >
//       <div className="headerScreen">
//         <h1 className="logoWrap">
//           <Link to="/"><i></i></Link>
//         </h1>
//         <nav className={isNavToggle ? 'gnb' : 'gnb Off'}>
//           <ul>
//             {menuItems.map((category, index) => (
//               <li key={index}>
//                 <div onClick={() => ShowLnbHandler(index)} className="gList">
//                   <Link to={category.link}>{category.category}</Link>
//                 </div>
//                 <ol
//                   className={
//                     index === isLnbItem ? 'lnb clickLnb' : 'lnb notClickLnb'
//                   }
//                 >
//                   {category.items.map((item, itemIndex) => (
//                     <li key={itemIndex}>
//                       <Link to={item.link}>
//                         {item.name}
//                         <div className="liner"></div>
//                       </Link>
//                     </li>
//                   ))}
//                 </ol>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <nav className={isNavToggle ? 'unb' : 'unb Off'}>
//           <ul>
//             <li onClick={SignInHandler}>
//               <Link to='/users'>로그인</Link>
//             </li>
//             <li>
//               <Link to='/signUp'>회원가입</Link>
//             </li>
//           </ul>
//         </nav>
//         <button onClick={ToggleHandler}>
//           <div className="navBtn">
//             <div className={isNavToggle ? 'onNavFirst' : 'offNavFirst'}></div>
//             <div className={isNavToggle ? 'onNavSecond' : 'offNavSecond'}></div>
//             <div className={isNavToggle ? 'onNavLast' : 'offNavLast'}></div>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { menuItems } from '../datas/LocalList';

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const SignInHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const [isViewNav, setIsViewNav] = useState(false);
  const menuViewHandler = () => {
    setIsViewNav(!isViewNav);
  };

  const [isNavToggle, setIsNavToggle] = useState(false);
  const ToggleHandler = () => {
    setIsNavToggle(!isNavToggle);
  };

  const [isLnbItem, setIsLnbItem] = useState();
  const ShowLnbHandler = (index) => {
    if (index === isLnbItem) {
      setIsLnbItem(undefined);
    } else {
      setIsLnbItem(index);
    }
  };

  const [isNavVisible, setNavVisibility] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setNavVisibility(window.scrollY <= 0 || window.innerWidth <= 1024);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setNavVisibility(true);
      }, 2000); 
    };

    const handleMouseEnter = () => {
      setNavVisibility(true);
    };

    const handleMouseLeave = () => {
      if (!window.scrollY && window.innerWidth <= 1024) {
        timeoutId = setTimeout(() => {
          setNavVisibility(false);
        }, 1000);
      }
    };

    const resetTimeout = () => {
      clearTimeout(timeoutId);

      if (!window.scrollY && window.innerWidth <= 1024) {
        timeoutId = setTimeout(() => {
          setNavVisibility(false);
        }, 1000); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', resetTimeout);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', resetTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header
      onMouseEnter={menuViewHandler}
      onMouseLeave={menuViewHandler}
      className={
        window.innerWidth > 1024
          ? isViewNav
            ? 'onHead'
            : null
          : isNavToggle
          ? 'onHead'
          : null
      }
      style={{ opacity: isNavVisible ? 1 : 0, transition: '1s ease' }}
    >
      <div className="headerScreen">
        <h1 className="logoWrap">
          <Link to="/"><i></i></Link>``
        </h1>
        <nav className={isNavToggle ? 'gnb' : 'gnb Off'}>
          <ul>
            {menuItems.map((category, index) => (
              <li key={index}>
                <div onClick={() => ShowLnbHandler(index)} className="gList">
                  <Link to={category.link}>{category.category}</Link>
                </div>
                <ol
                  className={
                    index === isLnbItem ? 'lnb clickLnb' : 'lnb notClickLnb'
                  }
                >
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link to={item.link}>
                        {item.name}
                        <div className="liner"></div>
                      </Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={isNavToggle ? 'unb' : 'unb Off'}>
          <ul>
            <li onClick={SignInHandler}>
              <Link to='/users'>로그인</Link>
            </li>
            <li>
              <Link to='/signUp'>회원가입</Link>
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

