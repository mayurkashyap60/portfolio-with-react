import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';


ReactDOM.render(
  <React.StrictMode>
    <First />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Second />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Third />
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
