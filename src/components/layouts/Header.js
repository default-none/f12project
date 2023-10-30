import { useEffect, useState } from 'react';
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1024) {
      setIsNavToggle(false);
    }
  }, [windowWidth]);

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