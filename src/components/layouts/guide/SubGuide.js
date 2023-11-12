import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SubGuide.scss';
import GuideStar from './GuideStar';
import GuideMoon from './GuideMoon';
import GuideNight from './GuideNight';

const SubGuide = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    console.log('Tab from URL:', tab);
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
        <GuideStar />
      );
    } else if (activeTab === 2) {
      return (
       <GuideMoon />
      );
    } else if (activeTab === 3) {
      return (
       <GuideNight />
      );
    }
  };

  return (
    <section className="subGuide">
      <div className="subGuideHeader">
        <h1>행사안내</h1>
        <p>궁중의 아름다움을 만나다</p>
      </div>
      <div className="subGuideScreen">
        <div className="tabWrap">
          <div
            className={`tabMenu ${activeTab === 1 ? 'tabAcitve' : ''}`}
            onClick={() => changeTab(1)}
          >
            별빛야행
          </div>
          <div className="tabDivide"> | </div>
          <div
            className={`tabMenu ${activeTab === 2 ? 'tabAcitve' : ''} `}
            onClick={() => changeTab(2)}
          >
            달빛기행
          </div>
          <div className="tabDivide"> | </div>
          <div
            className={`tabMenu ${activeTab === 3 ? 'tabAcitve' : ''}`}
            onClick={() => changeTab(3)}
          >
            밤의 석조전
          </div>
        </div>
        <TabContent />
      </div>
    </section>
  );
};

export default SubGuide;
