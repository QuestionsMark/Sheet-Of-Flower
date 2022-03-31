import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import SimpleReactLightbox from 'simple-react-lightbox';

import App from './components/App';

import reportWebVitals from './reportWebVitals';

import './styles/main.scss';


library.add(fab, fas)

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Router>
        <App />
      </Router>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
