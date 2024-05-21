import React from 'react';
import { Header } from '../../client/components/header';
import { Footer } from '../../client/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiProvider from './apiProvider';
import { RoutePage } from '../../client/pages/routePage';



export const App = () => (
  <ApiProvider>
    <Header />
    <RoutePage />
    <Footer />
  </ApiProvider>
);
