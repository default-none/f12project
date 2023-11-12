import React, { useState } from 'react';

const Manager = ({ dispatch, setMode }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      payload: {
        title,
        content,
        writer: '문화재청',
        date: new Date().toLocaleDateString(),
      },
    });
    setTitle('');
    setContent('');
    setMode(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="postInformTitle"
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="postInoformContent"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="informBtn" type="submit">
        저장
      </button>
      <button onClick={() => setMode(false)} className="informBtn">
        취소
      </button>
    </form>
  );
};

export default Manager;
