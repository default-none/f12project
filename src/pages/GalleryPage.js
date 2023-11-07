
import  { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GalleryPage.scss';
import TopLayer from '../components/layers/TopLayer';

const GalleryPage = () => {
  const [isCont2Visible, setIsCont2Visible] = useState(false); //경복궁 더보기 클릭하면 창나타내며 버튼 사라짐

  const handleClick = () => {
    setIsCont2Visible(true);
  };
  const [isCont2Visible2, setIsCont2Visible2] = useState(false); //창덕궁 더보기 클릭하면 창나타내며 버튼 사라짐

  const handleClick2 = () => {
    setIsCont2Visible2(true);
  };
  const [isCont2Visible3, setIsCont2Visible3] = useState(false); //덕수궁 더보기 클릭하면 창나타내며 버튼 사라짐

  const handleClick3 = () => {
    setIsCont2Visible3(true);
  };

  //탭 하면 나오는 섹션들
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {

    if (!tab) {
      setActiveTab(1);
    } else if (tab === 'star') {
      setActiveTab(1);
    } else if (tab === 'moon') {
      setActiveTab(2);
    } else if (tab === 'night') {
      setActiveTab(3);
    }
  }, [tab]);
  
  const changeTab = (tab) => {
    setActiveTab(tab);
};

  const TabContent = () => {
    if (activeTab === 1) {
      return (
      <main className='GalleryPageGbk'>
      <h1>별빛야행</h1>
      <div className='ImgBox'>
        <div className='GbkImg1 GbkGride'></div>
        <div className='GbkImg2 GbkGride h459'></div>
        <div className='GbkImg3 GbkGride h459'></div>
        <div className='GbkImg4 GbkGride h928'></div>
        <div className='GbkImg5 GbkGride h459'></div>
        <div className='GbkImg6 GbkGride h459'></div>
        <div className='GbkImg7 GbkGride h459'></div>
        <div className='GbkImg8 GbkGride h459'></div>
      </div>
      {!isCont2Visible && (
        <p className='ViewMore2' onClick={handleClick}>VIEW MORE</p>
      )}
      {isCont2Visible && (
        <div className='cont2'>
          <div className='ImgBox2'>
            <div className='GbkImg9 GbkGride'></div>
            <div className='GbkImg10 GbkGride h459'></div>
            <div className='GbkImg11 GbkGride h459'></div>
            <div className='GbkImg12 GbkGride h928'></div>
            <div className='GbkImg13 GbkGride h459'></div>
            <div className='GbkImg14 GbkGride h459'></div>
            <div className='GbkImg15 GbkGride h459'></div>
            <div className='GbkImg16 GbkGride h459'></div>
          </div>
        </div>
      )}
    </main>
      );


    } else if (activeTab === 2) {
      return (
      <main className='GalleryPageCdk'>
      <h1>달빛기행</h1>
      <div className='ImgBox3'>
      <div className='CdkImg1 GbkGride h459'></div>
      <div className='CdkImg2 GbkGride h459'></div>
      <div className='CdkImg3 GbkGride h459'></div>
      <div className='CdkImg4 GbkGride h928'></div>
      <div className='CdkImg5 GbkGride h459'></div>
      <div className='CdkImg6 GbkGride h459'></div>
      <div className='CdkImg7 GbkGride h459'></div>
      <div className='CdkImg8 GbkGride h459'></div>
      </div>
      {!isCont2Visible2 && (
        <p className='ViewMore2' onClick={handleClick2}>VIEW MORE</p>
      )}
      {isCont2Visible2 && (
        <div className='cont3'>
          <div className='ImgBox4'>
            <div className='CdkImg9 GbkGride'></div>
            <div className='CdkImg10 GbkGride h459'></div>
            <div className='CdkImg11 GbkGride h459'></div>
            <div className='CdkImg12 GbkGride h928'></div>
            <div className='CdkImg13 GbkGride h459'></div>
            <div className='CdkImg14 GbkGride h459'></div>
            <div className='CdkImg15 GbkGride h459'></div>
            <div className='CdkImg16 GbkGride h459'></div>
          </div>
        </div>
      )}
    </main>
      );


      
    } else if (activeTab === 3) {
      return (
      <main className='GalleryPageDsk'>
      <h1>밤의 석조전</h1>
      <div className='ImgBox5'>
      <div className='DskImg1 GbkGride'></div>
      <div className='DskImg2 GbkGride h459'></div>
      <div className='DskImg3 GbkGride h459'></div>
      <div className='DskImg4 GbkGride h928'></div>
      <div className='DskImg5 GbkGride h459'></div>
      <div className='DskImg6 GbkGride h459'></div>
      <div className='DskImg7 GbkGride h459'></div>
      <div className='DskImg8 GbkGride h459'></div>
      </div>
      {!isCont2Visible3 && (
        <p className='ViewMore2' onClick={handleClick3}>VIEW MORE</p>
      )}
      {isCont2Visible3 && (
        <div className='cont4'>
          <div className='ImgBox6'>
            <div className='DskImg9 GbkGride'></div>
            <div className='DskImg10 GbkGride h459'></div>
            <div className='DskImg11 GbkGride h459'></div>
            <div className='DskImg12 GbkGride h928'></div>
            <div className='DskImg13 GbkGride h459'></div>
            <div className='DskImg14 GbkGride h459'></div>
            <div className='DskImg15 GbkGride h459'></div>
            <div className='DskImg16 GbkGride h459'></div>
          </div>
        </div>
      )}
    </main>
      );
    }
  };

  return (
    <main>
      <TopLayer name='갤러리'/>
      <div className="subProgramScreen">
        <div className="tabWrap">
          <div className={`tabMenu ${activeTab === 1 ? 'tabAcitve' : ''}`} onClick={() => changeTab(1)}>
            별빛야행
          </div>
          <div className="tabDivide"> | </div>
          <div className={`tabMenu ${activeTab === 2 ? 'tabAcitve' : ''} `} onClick={() => changeTab(2)}>
            달빛기행
          </div>
          <div className="tabDivide"> | </div>
          <div className={`tabMenu ${activeTab === 3 ? 'tabAcitve' : ''}`} onClick={() => changeTab(3)}>
            밤의 석조전
          </div>
        </div>
        <TabContent />
      </div>
    </main>
  );
};

export default GalleryPage;