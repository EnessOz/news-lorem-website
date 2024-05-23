import React from 'react'

export const HeroSection = () => {
    return (
        <div className="container-fluid px-0 pb-5 w-100 ">
            <div className="hero-section d-flex justify-content-center align-items-center">
                <div className="hero-image w-50">
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/2A16/production/_115547701_gettyimages-1229654243.jpg" className="img-fluid w-75" alt="Hero Image" />
                </div>
                <div className="hero-content w-50">
                    <h2>"Cake meme, hiçbir şeyin göründüğü gibi olmadığı bir dünyada koronavirüs saçmalığını yansıtıyor."</h2>
                    <p>Bu ayın başlarında, sıradan nesneler gibi görünen hiper-gerçekçi pastaları gösteren viral bir video, sosyal medyada insanları her gönderiyi ve bazen kendi gerçekliklerini bile iki kez sorgulamaya itti. Bu da etkili bir şekilde yeni bir meme başlattı: "Bu gerçek mi yoksa pasta mı?"</p>
                    <p><span className='fw-bold'>2 saat önce</span> by Kirk Hammett | 4 dk</p>
                </div>
            </div>
        </div>
    )
}
