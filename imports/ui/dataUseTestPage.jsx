

import React from 'react';
import { useApi } from './apiProvider';

const DataUse = () => {
  const { data, loading, error, fetchDataByCountry } = useApi();

  const handleChangeCountry = (countryCode) => {
    fetchDataByCountry(countryCode);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  //Api veri kullanımı test sayfası
console.log(data)
  return (
    <div>
      <button onClick={() => handleChangeCountry('tr')}>Turkey</button>
      <button onClick={() => handleChangeCountry('de')}>USA</button>
      
    </div>
  );
};

export default DataUse;
