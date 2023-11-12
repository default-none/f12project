import React from 'react';
import { useParams } from 'react-router-dom';
const FAQModal = ({ postId, handleModal2, FAQIndex }) => {
  const { id } = useParams();
  const postDetails = FAQIndex.find((post) => post.id === postId);

  return (
    <div key={id}>
      {postDetails ? (
        <div className="modalWrap">
          <h3 className="modalTitle">{postDetails.title}</h3>
          <p className="modalContent">{postDetails.content}</p>
        </div>
      ) : (
        <p>게시글을 찾을 수 없습니다.</p>
      )}
      <button onClick={handleModal2}>닫기</button>
    </div>
  );
};

export default FAQModal;
