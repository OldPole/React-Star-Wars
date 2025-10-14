import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@store/store';
import ThemeProvider from '@context/ThemeProvider';
import App from '@containers/App';
import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//for deploy add basename={'/React-Star-Wars/'} to BrowserRouter and to homepage in package.json

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
