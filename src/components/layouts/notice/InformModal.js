import React from "react";
import { useParams } from "react-router-dom";
const Modal = ({postId, handleModal2, informIndex}) => {
  const { id } = useParams();
  const postDetails = informIndex.find((post) => post.id === postId);

  return (
    <div key={id}>
      {postDetails ? (
        <div className="modalWrap">
          <h3 className="modalTitle">{postDetails.title}</h3>
          <p className="modalContent">{postDetails.content}</p>
          <div className="modalWriteDateWrap">
            <p className="modalWriteDate">작성자: {postDetails.writer}</p>
            <p className="modalWriteDate">등록일: {postDetails.date}</p>
          </div>
        </div>
      ) : (
        <p>게시글을 찾을 수 없습니다.</p>
      )}
      <button onClick={handleModal2}>닫기</button>
    </div>
  );
};

export default Modal;
