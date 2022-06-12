import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from './components/Layout/Layout';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <BackgroundImage/>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
