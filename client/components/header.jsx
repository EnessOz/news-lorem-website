import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = () => {
    return (
        <header className="bg-light p-3 sticky-top" >
            <div className="container d-flex justify-content-around align-items-center" style={{ height: "70px" }}>
                <img src="/images/logo.png" alt="logo" className="img-fluid" style={{ width: '130px', height: '130px' }} />
                <nav className="d-flex justify-content-around">
                    <ul className="nav nav-pills nav-fill ">
                        <li className="nav-item ">
                            <a className="nav-link text-secondary " href="/">Anasayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/siyaset">Siyaset</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">İş</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Spor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Dünya</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Seyahat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Podcastler</a>
                        </li>
                    </ul>
                </nav>
                <div className="d-flex">
                    <ul className="nav nav-pills nav-fill ">
                        <li className="nav-item ">
                            <a className="nav-link text-secondary" href="/"><FontAwesomeIcon icon={faUser} size='2x' /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/"><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></a>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" className='nav-link text-secondary bg-transparent'>
                                    <FontAwesomeIcon icon={faBars} size='2x' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="custom-dropdown-menu">
                                    <Dropdown.Item href="#">Seçenek 1</Dropdown.Item>
                                    <Dropdown.Item href="#">Seçenek 2</Dropdown.Item>
                                    <Dropdown.Item href="#">Seçenek 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>


                </div>
            </div>
        </header>
    );
};
