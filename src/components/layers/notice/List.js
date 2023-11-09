import React, { createContext, useCallback, useReducer, useState } from 'react';
import './list.scss';
import { Outlet, useNavigate } from 'react-router-dom';

export const StateContext = createContext({
  informIndex: [],
});

export const FunctionContext = createContext({
  createData: () => {},
  editData: () => {},
  deleteData: () => {},
});

const initialInformState = {
  informIndex: [
    {
      id: 1,
      title: '첫번째 공지사항입니다.',
      content: '첫번째 공지사항 내용입니다.',
      writer: '문화재청',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 2,
      title: '두번째 공지사항입니다.',
      content: '두번째 공지사항 내용입니다.',
      writer: '문화재청',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 3,
      title: '세번째 공지사항입니다.',
      content: '세번째 공지사항 내용입니다.',
      writer: '문화재청',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 4,
      title: '네번째 공지사항입니다.',
      content: '네번째 공지사항 내용입니다.',
      writer: '문화재청',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
    {
      id: 5,
      title: '다섯번째 공지사항입니다.',
      content: '다섯번째 공지사항 내용입니다.',
      writer: '문화재청',
      date: new Date(2023, 0, 1).toLocaleDateString(),
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        informIndex: state.informIndex.concat({
          ...action.item,
          id: state.informIndex.length + 1,
        }),
      };
    case 'EDIT':
      return {
        informIndex: state.informIndex.map((item) =>
          item.id === action.item.id ? { ...item, ...action.item } : item,
        ),
      };
    case 'DELETE':
      return {
        informIndex: state.informIndex.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

const List = () => {
  const [data, dispatch] = useReducer(reducer, initialInformState);
  const [onModal, setOnModal] = useState(false);
  const [delayModal, setDelayModal] = useState(false);
  const navigate = useNavigate();

  let handleDelayModal;
  let handleOffModal;

  const createData = useCallback((title, content, writer) => {
    const date = new Date().toISOString().slice(0, 10);
    dispatch({
      type: 'CREATE',
      item: { title, content, writer, date },
    });
  }, []);

  const editData = useCallback((id, title, content, writer) => {
    dispatch({
      type: 'EDIT',
      item: { id, title, content, writer },
    });
  }, []);

  const deleteData = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  }, []);

  const handleModal = (id) => {
    navigate(`/modal/${id}`);
    setOnModal(true);
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
    <StateContext.Provider value={{ informIndex: data.informIndex }}>
      <FunctionContext.Provider value={{ createData, editData, deleteData }}>
        <section className="informSection">
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
              {data.informIndex.map((info) => (
                <tr
                  onClick={() => handleModal(info.id)}
                  className="informList"
                  key={info.id}
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
                <Outlet />
              </div>
            </>
          ) : null}
        </section>
      </FunctionContext.Provider>
    </StateContext.Provider>
  );
};

export default List;
