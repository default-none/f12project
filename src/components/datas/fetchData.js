// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const fetchData = async () => {
  // 임시로 setTimeout을 사용하여 3초의 지연을 만들고, 임시 데이터를 반환합니다.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          message: 'Hello, world!'
        }
      });
    }, 3000);
  });
};

export default fetchData;