import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import ThemeProvider from '@context/ThemeProvider';

import store from '@store/store';

import App from '@containers/App';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>    
            </Provider> 
        </React.StrictMode>
    </BrowserRouter>
);
