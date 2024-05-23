import React from 'react';
import { useApi } from '../../imports/ui/apiProvider';

export const ContentRecommendations = ({ sliceCount, containerClass, innerContainerClass, cardClass, innerContainerDetailClass, title }) => {
    const { data, loading, error } = useApi();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Hata: {error.message}</div>;
    }

    const displayData = data.result.slice(0, sliceCount);

    return (
        <div className={containerClass}>
            {title && <h5 className="text-center fw-bold">{title}</h5>}
            {displayData.map((item, index) => (
                <div key={index} className={`col-md-6 w-100 ${innerContainerClass}`}>
                    <div className={`d-flex ${innerContainerDetailClass} `}>
                        <div className={`card mb-4 w-100 mx-4 ${cardClass}`} style={{ height: "350px" }} >
                            <img className="card-img-top" src={item.image} alt={item.name} style={{ height: "50%" }} />
                            <div className="card-body">
                                <a href={item.key} className="card-title text-decoration-none fw-bold">{item.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
