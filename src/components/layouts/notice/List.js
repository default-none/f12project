import './List.scss';
import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './reducer';
import SearchBar from './SearchBar';
import Modal from './InformModal';
import { useNavigate } from 'react-router-dom';
import Manager from './Manager';

const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [onModal, setOnModal] = useState(false);
  const [delayModal, setDelayModal] = useState(false);
  const [selectId, setSelectId] = useState(0);
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();

  let handleDelayModal;
  let handleOffModal;

  const onMode = () => {
    setMode(!mode);
  };
  const handleModal = (id) => {
    navigate(`/notice/inform/modal/${id}`);
    setOnModal(true);
    setSelectId(id);
    if (handleDelayModal) {
      clearTimeout(handleDelayModal);
    }
    handleDelayModal = setTimeout(() => {
      setDelayModal(!delayModal);
    }, 500);
  };

  const handleModal2 = () => {
    setDelayModal(false);
    if (handleOffModal) {
      clearTimeout(handleOffModal);
    }

    handleOffModal = setTimeout(() => {
      setOnModal(false);
    }, 500);
  };

  return (
    <div className="informSection">
      <button className="modeBtn" onClick={onMode}></button>
      {mode ? (
        <Manager dispatch={dispatch} setMode={setMode} />
      ) : (
        <>
          <table className="ListComponent">
            <thead className="informData">
              <tr>
                <th>일련번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {state.informIndex
                .filter(
                  (info) =>
                    info.title.includes(state.searchTerm) ||
                    info.content.includes(state.searchTerm),
                )
                .map((info) => (
                  <tr
                    className="informList"
                    key={info.id}
                    onClick={() => handleModal(info.id)}
                  >
                    <td className="informNumbering">{info.id}</td>
                    <td className="informTitle">{info.title}</td>
                    <td className="informDate">{info.date}</td>
                    <td className="informWriter">{info.writer}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {onModal ? (
            <>
              <div
                className={delayModal ? 'modalBack op' : 'modalBack'}
                onClick={handleModal2}
              ></div>
              <div className={delayModal ? ' op modal' : 'modal'}>
                <Modal
                  informIndex={state.informIndex}
                  postId={selectId}
                  handleModal2={handleModal2}
                />
              </div>
            </>
          ) : null}
          <SearchBar dispatch={dispatch} />
        </>
      )}
    </div>
  );
};

export default List;
