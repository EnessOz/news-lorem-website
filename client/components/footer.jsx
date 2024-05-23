import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <footer className="bg-custom-dark-blue text-light py-5">
      <div className="container d-flex justify-content-around align-items-center">
        <div className="col-md-4">
          <img src="/images/logo.png" alt="logo.png" className="img-fluid" style={{ width: '130px', height: '130px' }} />
          <p className="small fw-light">Copyright 2020 | LOREM NEWS</p>

        </div>
        <nav className="d-grid gap-2">
          <a href="#" className="nav-link">Gizlilik Politikası</a>
          <a href="#" className="nav-link">Kişisel Bilgilerimi Satma</a>
          <a href="#" className="nav-link">Hizmet Süresi</a>
          <a href="#" className="nav-link">Loremnews.com Site Haritası</a>
        </nav>
        <div className="d-grid gap-4">
          <nav className="d-flex justify-content-around">
            <a href="#" className="nav-link mx-3">Hakkımızda</a>
            <a href="#" className="nav-link mx-3">İletişim</a>
            <a href="#" className="nav-link mx-3">Kurslar</a>
            <a href="#" className="nav-link mx-3">Kuponlar</a>
          </nav>
          <div className="d-flex justify-content-around">
            <a href="#" className="nav-link"><FontAwesomeIcon icon={faWifi} size='2x' /></a>
            <a href="#" className="nav-link"><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
            <a href="#" className="nav-link"><FontAwesomeIcon icon={faGithubAlt} size='2x' /></a>
            <a href="#" className="nav-link"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
