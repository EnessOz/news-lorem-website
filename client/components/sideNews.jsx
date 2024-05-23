import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from '../../imports/ui/apiProvider';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal,faSpinner } from '@fortawesome/free-solid-svg-icons';

export const SideNews = () => {
    const { data, loading, error} = useApi();
    const [randomItem, setRandomItem] = useState(null);

    useEffect(() => {
        if (data.result && data.result.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.result.length);
            setRandomItem(data.result[randomIndex]);
        }
    }, [data]);

    if (loading) {
        return <div><FontAwesomeIcon icon={faSpinner} spin /></div>;
    }

    if (error) {
        return <div>Hata: {error.message}</div>;
    }

    return (
        <div className="row w-25">
            {randomItem && (
                <div className="col-md-12 ">
                    <p className='pt-3 text-danger font-weight-bold'>Live <FontAwesomeIcon icon={faSignal} /></p>
                    <div className="card mb-0 p-0">
                        <img className="card-img-top w-100 h-100" src={randomItem.image} alt={randomItem.name} />
                        <a href={randomItem.key} className="card-title text-decoration-none fw-bold m-3">{randomItem.name}</a>
                    </div>
                </div>
            )}
        </div>
    );
};
