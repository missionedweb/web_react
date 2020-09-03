import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Navbar.css';
import './Footer.css';
import './Testimonials.css';
import './LearningPage1.css';
import './LearningPage2.css';
import './Header.css';
import './WhyMissionEdWorks.css';
import './GetTheApp.css';
import './Counselling.css';
import './Counter.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
