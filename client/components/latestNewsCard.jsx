import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from '../../imports/ui/apiProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const LatestNewsCard = () => {
    const { data, loading, error, fetchDataByCountry } = useApi();
    const [showMore, setShowMore] = useState(false);

    if (loading) {
        return <div><FontAwesomeIcon icon={faSpinner} spin /></div>;
    }

    if (error) {
        return <div>Hata: {error.message}</div>;
    }

    const displayData = showMore ? data.result : data.result.slice(0, 4);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="row w-50">
            <div className='my-3'>
                <nav className="d-flex px-3 align-items-center bg-danger" style={{ gap: "5%" }}>
                    <a href="#" className="nav-link">Korona Haberleri</a>
                    <a href="/siyaset" className="nav-link">Siyaset</a>
                    <a href="/#" className="nav-link">İş</a>
                </nav>
            </div>
            {displayData.map((item, index) => (
                <div key={index} className="col-md-6 w-50">
                    <div className="card mb-4" style={{ height: "540px" }}>
                        <img className="card-img-top w-100 h-50" src={item.image} alt={item.name} />
                        <div className="card-body">
                            <a href={item.key} className="card-title text-decoration-none fw-bold">{item.name}</a>
                            <p className="card-text">{truncateText(item.description, 100)}</p> 
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                            <p className='fw-bold'>2 saat önce</p>
                            <p>by James Hetfield | 4 dk</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-md-12 d-flex justify-content-center mb-5">
                {!showMore && data.result.length > 4 && (
                    <button className="btn btn-outline-danger btn-lg" style={{ width: "200px" }} onClick={() => setShowMore(true)}>Daha Fazla</button>
                )}
                {showMore && (
                    <button className="btn btn-outline-danger btn-lg" style={{ width: "200px" }} onClick={() => setShowMore(false)}>Daha Az</button>
                )}
            </div>
        </div>
    );
};
