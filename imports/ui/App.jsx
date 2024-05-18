import React from 'react';
import { Header } from '../../client/components/header';
import { Footer } from '../../client/components/footer';
import { LatestNewsCard } from '../../client/components/latestNewsCard';
import { EditorPicksSlide } from '../../client/components/editorPicksSlide';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
  <div>
    <Header />
    <LatestNewsCard />
    <EditorPicksSlide/>
    <Footer />
  </div>
);
