// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // eslint-disable-next-line react/prop-types
// const Maps = ({ apiEndpoint }) => {
//   const [locationData, setLocationData] = useState();

//   useEffect(() => {
//     axios
//       .get('https://dapi.kakao.com/v2/local/search/address.json', {
//         headers: { Authorization: 'KakaoAK 7f777882dc90ebda44538505fffeb6d0' },
//       })
//       .then((response) => {
//         setLocationData(response.data);
//       })
//       .catch((error) => {
//         console.error('API 요청 중 오류 발생', error);
//       });
//   }, [apiEndpoint]);
//   return (
//     <div>
//       {locationData ? (
//         <div>
//           <h3>{locationData.address_name}</h3>
//           <p>Latitude: {locationData.latitude}</p>
//           <p>Longitude: {locationData.longitude}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Maps;
