import React from 'react'
import { HeroSection } from '../components/heroSection'
import { LatestNewsCard } from '../components/latestNewsCard'
import { EditorPicksSlide } from '../components/editorPicksSlide'
import { BreakingNewsBanner } from '../components/breakingNewsBanner';
import { SearchBar } from '../components/searchBar';
import { SideNews } from '../components/sideNews';

export const Homepage = () => {
    return (
        <div className='custom-class-home'>
            <HeroSection />
            <BreakingNewsBanner />
            <div className='d-flex flex-row justify-content-between'>
                <LatestNewsCard />
                <SideNews />
                <SearchBar />
            </div>
            <EditorPicksSlide />
        </div>
    )
}
