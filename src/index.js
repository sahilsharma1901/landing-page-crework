import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/Layout/Layout';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <BackgroundImage/>
      <App />
    </Layout>
  </React.StrictMode>
);
