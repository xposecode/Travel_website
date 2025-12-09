// import { useEffect, useState } from 'react';
// import API from '../services/api';

// const TestAPI = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     API.get('/test/')
//       .then(response => setData(response.data))
//       .catch(err => setError(err.message));
//   }, []);

//   return (
//     <div>
//       <h1>API Test</h1>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };