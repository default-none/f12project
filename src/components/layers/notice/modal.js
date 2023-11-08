import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from './List';

const DetailPage = () => {
  const { informIndex } = useContext(StateContext);
  const { id } = useParams();
  const detail = informIndex.find((info) => info.id === parseInt(id));

  return detail ? (
    <div className="modal">
      <h1>{detail.title}</h1>
      <p>{detail.content}</p>
      <p>작성자: {detail.writer}</p>
      <p>등록일: {detail.date}</p>
    </div>
  ) : (
    <p>해당 공지사항을 찾을 수 없습니다.</p>
  );
};

export default DetailPage;
