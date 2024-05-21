import React, { useState } from 'react';
import { useApi } from '../../imports/ui/apiProvider';

export const SearchBar = () => {
    const { fetchDataByCountry } = useApi();
    const [countryCode, setCountryCode] = useState('');

    const handleChange = (event) => {
        setCountryCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchDataByCountry(countryCode);
    };

    return (
        <div className='w-25'>
            <div className='pt-3'>
                <h3>Location News</h3>
            </div>
            <div className='bg-white p-4'>
                <p>Get Location specific News</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Location"
                        aria-describedby="basic-addon1"
                        value={countryCode}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-danger mt-2">Submit</button>
                </form>
            </div>
        </div>
    );
};
