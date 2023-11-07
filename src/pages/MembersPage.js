import React, { useState } from 'react';
import './MembersPage.scss';

const MembersPage = () => {
    const [activeTab, setActiveTab] = useState('id'); // 기본 탭은 아이디 찾기로 설정

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return ( <main className='MembersPage'>
        <div className='Bg'>
            <div className='UsersMemberWrap'>
                <div className='logo'></div>
                <div className='FoundTab'>
                    <div className={`tab ${activeTab === 'id' ? 'active' : ''}`} onClick={() => handleTabClick('id')}>아이디 찾기</div>
                    <div className={`tab ${activeTab === 'password' ? 'active' : ''}`} onClick={() => handleTabClick('password')}>비밀번호 찾기</div>
                </div>
                {activeTab === 'id' ? (
            <div className='IdNumber'>
              <input type='text' placeholder='이름'></input>
              <input type='text' placeholder='휴대전화'></input>
              <button>아이디 찾기</button>
            </div>
          ) : (
            <div className='PasswordRecovery'>
              <input type='text' placeholder='아이디'></input>
              <input type='text' placeholder='휴대전화'></input>
              <button>비밀번호 찾기</button>
            </div>
          )}
        </div>
    </div>

        </main>
     );
};
 
export default MembersPage;