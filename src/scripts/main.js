// import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components';

setTimeout(
  () => {
    ReactDOM.render(
      <HelloWorld />,
      document.getElementById('root')
    )
  },
  2000
);

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import * as serviceWorker from './service-worker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
