import React from 'react';
import { Header } from '../../client/components/header';
import { Footer } from '../../client/components/footer';
import { LatestNewsCard } from '../../client/components/latestNewsCard';
import { EditorPicksSlide } from '../../client/components/editorPicksSlide';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataUse from './dataUseTestPage';
import ApiProvider from './apiProvider'; 

export const App = () => (
  <ApiProvider> 
    <div>
      <Header />
      <LatestNewsCard />
      <EditorPicksSlide />
      <DataUse />
      <Footer />
    </div>
  </ApiProvider>
);
