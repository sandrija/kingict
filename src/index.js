import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProvidedApp from './components/App/App';

const productApp = (
    <ProvidedApp />
);

const appRoot = ReactDOM.createRoot(document.getElementById('root'));

appRoot.render(productApp);

