// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useApi } from '../../imports/ui/apiProvider';

// export const LatestNewsCard = () => {
//     const { data, loading, error, fetchDataByCountry } = useApi();
//     const [showMore, setShowMore] = useState(false);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     const displayData = showMore ? data.result : data.result.slice(0, 4);

//     return (
//         <div className="row" style={{ width: "810px" }}>
//             <div className='bg-white'>

//             başlıklar gelecek

//             </div>
//             {displayData.map((item, index) => (
//                 <div key={index} className="col-md-6" style={{ width: "400px", height: "550px" }}>
//                     <div className="card mb-4" style={{ height: "540px" }}>
//                         <img className="card-img-top" src={item.image} alt="Card image cap" />
//                         <div className="card-body">
//                             <a href='#' className="card-title text-decoration-none fw-bold">{item.name}</a>
//                             <p className="card-text">{item.description}</p>
//                         </div>
//                         <div className='card-footer d-flex justify-content-between'>
//                             <p>2 hours ago</p>
//                             <p className='fw-light'>by James Hetfield | 4 min read</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//             <div className="col-md-12 d-flex justify-content-center mb-5"> {/* Butonların ortalanması */}
//                 {!showMore && data.result.length > 4 && (
//                     <button className="btn btn-outline-danger btn-lg" style={{ width: "200px" }} onClick={() => setShowMore(true)}>Show More</button>
//                 )}
//                 {showMore && (
//                     <button className="btn btn-outline-danger btn-lg" style={{ width: "200px" }} onClick={() => setShowMore(false)}>Show Less</button>
//                 )}
//             </div>
//         </div>
//     );
// };



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from '../../imports/ui/apiProvider';

export const LatestNewsCard = () => {
    const { data, loading, error, fetchDataByCountry } = useApi();
    const [showMore, setShowMore] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const displayData = showMore ? data : data.slice(0, 4);

    return (
        <div className="row w-50" >
              <div className='my-3' >
                <nav className="d-flex px-3 align-items-center bg-white " style={{gap:"5%"}}>
                    <a href="/" className="nav-link">Korona Haberleri</a>
                    <a href="/" className="nav-link">Siyaset</a>
                    <a href="/" className="nav-link">İş</a>
                </nav>
            </div>
            {displayData.map((item, index) => (
                <div key={index} className="col-md-6 w-50" >
                  
                    <div className="card mb-4" style={{ height: "540px" }}>
                        <img className="card-img-top" style={{ width: "100%", height: "100px" }} src={item.image} alt="Card image cap" />
                        <div className="card-body">
                            <a href='#' className="card-title text-decoration-none fw-bold">{item.title}</a>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                            <p>2 hours ago</p>
                            <p className='fw-light'>by James Hetfield | 4 min read</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-md-12 d-flex justify-content-center mb-5"> 
                {!showMore && data.length > 4 && (
                    <button className="btn btn-outline-danger btn-lg" style={{ width: "200px" }} onClick={() => setShowMore(true)}>Show More</button>
                )}
                {showMore && (
                    <button className="btn btn-outline-danger btn-lg" style={{ width: "200px" }} onClick={() => setShowMore(false)}>Show Less</button>
                )}
            </div>
        </div>
    );
};
