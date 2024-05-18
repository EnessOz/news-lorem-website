import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const LatestNewsCard = () => {
    return (
        <div className="card d-flex  " style={{ width: "438px", height: "520px" }} >
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className='card-body d-flex justify-content-between'>
                <p>2 hours ago</p>
                <p className='fw-light'>by James Hetfield | 4 min read</p>
            </div>
        </div>
    )
}
