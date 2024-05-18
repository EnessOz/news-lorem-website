import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = () => {
    return (
        <header className="bg-light p-3">
            <div className="container d-flex justify-content-around align-items-center">
                <img src="/images/logo.png" alt="logo" className="img-fluid" style={{ width: '130px', height: '130px' }} />
                <nav className="d-flex justify-content-around">
                    <a href="/" className="nav-link">Korona Haberleri</a>
                    <a href="/" className="nav-link">Siyaset</a>
                    <a href="/" className="nav-link">İş</a>
                    <a href="/" className="nav-link">Spor</a>
                    <a href="/" className="nav-link">Dünya</a>
                    <a href="/" className="nav-link">Seyahat</a>
                    <a href="/" className="nav-link">Podcastler</a>
                </nav>
                <div className="d-flex">
                    <a href="/" className="nav-link"><FontAwesomeIcon icon={faUser} size='2x' /></a>
                    <a href="/" className="nav-link"><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></a>
                    <Dropdown>
                        <Dropdown.Toggle variant="none" id="dropdown-basic" className='nav-link'>
                            <FontAwesomeIcon icon={faBars} size='2x' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            <Dropdown.Item href="#">Seçenek 1</Dropdown.Item>
                            <Dropdown.Item href="#">Seçenek 2</Dropdown.Item>
                            <Dropdown.Item href="#">Seçenek 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>
        </header>
    );
};
