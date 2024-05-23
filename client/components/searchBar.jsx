import React, { useState } from 'react';
import { useApi } from '../../imports/ui/apiProvider';

export const SearchBar = () => {
    const { fetchDataByCountry } = useApi();
    const [countryCode, setCountryCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const value = event.target.value.trim().toLowerCase(); 
        setCountryCode(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (countryCode === 'tr' || countryCode === 'de') {
            fetchDataByCountry(countryCode);
            setErrorMessage('');
        } else {
            setErrorMessage('Sadece "tr" veya "de" girilebilir');
        }
    };

    return (
        <div className='w-25'>
            <div className='pt-3'>
                <h3>Bölgesel Haberler</h3>
            </div>
            <div className='bg-white p-4'>
                <p>Bölgenize Göre Haber Alın</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ülke kodunu giriniz"
                        aria-describedby="basic-addon1"
                        value={countryCode}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-danger mt-2">Gönder</button>
                </form>
                {errorMessage && <div className="alert alert-danger mt-2" role="alert">{errorMessage}</div>}
            </div>
        </div>
    );
};
