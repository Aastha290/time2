import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';

<script src="https://accounts.google.com/gsi/client" async defer></script>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
