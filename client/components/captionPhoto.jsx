import React from 'react'
import { useParams } from 'react-router-dom';
import { useApi } from '../../imports/ui/apiProvider';

export const CaptionPhoto = () => {
    const { data, loading, error } = useApi();
    const { id } = useParams();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Hata: {error.message}</div>;
    }

    const newsFind = data.result.find(item => item.key === id);

    if (!newsFind) {
        return <div>Haber bulunamadı!</div>;
    }

    return (
        <div >
            {newsFind && (
                <div className='d-flex flex-column mx-5 px-5'>
                    <img src={newsFind.image} alt={newsFind.key} style={{ height: "450px" }}></img>
                    <p className='fst-italic '>{newsFind.description}</p>
                </div>
            )}
        </div>
    )
}
