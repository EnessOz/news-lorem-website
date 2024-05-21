import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from '../../imports/ui/apiProvider';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

export const SideNews = () => {
    const { data, loading, error, fetchDataByCountry } = useApi();
    const [showMore, setShowMore] = useState(false);
    const [randomItem, setRandomItem] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomItem(data[randomIndex]);
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="row w-25">
            {randomItem && (
                <div className="col-md-12 ">
                    <p className='pt-3 text-danger font-weight-bold'>Live <FontAwesomeIcon icon={faSignal} /></p>
                    <div className="card mb-0 p-0">
                        <img className="card-img-top w-100 h-100" src={randomItem.image} alt="Card image cap" />
                        <a href="#" className="card-title text-decoration-none fw-bold">{randomItem.title}</a>
                    </div>
                </div>
            )}
        </div>
    );
};
