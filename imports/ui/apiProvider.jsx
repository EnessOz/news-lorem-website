// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { HTTP } from 'meteor/http';

// // Context oluşturma
// const ApiContext = createContext();



// export const useApi = () => useContext(ApiContext);

// const ApiProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchDataByCountry = async (countryCode) => {
//     const url = `https://api.collectapi.com/news/getNews?country=${countryCode}&tag=general`;
//     const API_KEY = '1gAYmNNyEJrE6kbvQnlYrR:6mJB89iuQZckWSCCuxDlHH';
//     const headers = {
//       'content-type': 'application/json',
//       'authorization': `apikey ${API_KEY}`
//     };

//     try {
//       const result = await new Promise((resolve, reject) => {
//         HTTP.get(url, { headers }, (error, result) => {
//           if (!error) {
//             resolve(result.data);
//           } else {
//             reject(error);
//           }
//         });
//       });

//       setData(result);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDataByCountry('tr'); // Varsayılan istek
//   }, []);
//   console.log("ss", data)
//   return (
//     <ApiContext.Provider value={{ data, loading, error, fetchDataByCountry }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };

// export default ApiProvider;







import React, { createContext, useContext, useEffect, useState } from 'react';
import { HTTP } from 'meteor/http';

//İstek sınırı yüzünden farklı url!!
const ApiContext = createContext();



export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataByCountry = async (countryCode) => {
    const url = `https://fakestoreapi.com/products`;
    const API_KEY = '1gAYmNNyEJrE6kbvQnlYrR:6mJB89iuQZckWSCCuxDlHH';
    const headers = {
      'content-type': 'application/json',
      'authorization': `apikey ${API_KEY}`
    };

    try {
      const result = await new Promise((resolve, reject) => {
        HTTP.get(url, { headers }, (error, result) => {
          if (!error) {
            resolve(result.data);
          } else {
            reject(error);
          }
        });
      });

      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataByCountry('tr'); // Varsayılan istek
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading, error, fetchDataByCountry }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;


