import './Footer.scss';

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="footerWrap">
                <div className="footerL">
                    <div className="logo"></div>
                    <p>A 서울특별시 노원구 상계로3길 21 3층, 6층</p>
                    <p>T 031-622-7720 | F 070-7610-7248</p>
                </div>
                <div className="footerR">
                    <div className="iconWrap">
                        <div className="icon face"></div>
                        <div className="icon insta"></div>
                        <div className="icon blog"></div>
                    </div>
                    <div>
                        <p>개인정보처리방침</p>
                        <p>회사소개</p>
                    </div>
                    <p>Copyright©nowongreenart. All rights reserved.</p>
                </div>
            </div>
        </section>
     );
};
 
export default Footer;