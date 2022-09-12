import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import { DarkModeProvider } from './context/DarkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <DarkModeProvider>  
    <App />
    </DarkModeProvider>
  
);


