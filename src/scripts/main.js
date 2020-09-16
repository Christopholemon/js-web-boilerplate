import React from 'react';
import ReactDOM from 'react-dom';
import { Clock, Tabs } from './components';

ReactDOM.render(
  <Clock />,
  document.getElementById('clock-timer')
);

ReactDOM.render(
  <Tabs />,
  document.getElementById('tabs')
)
