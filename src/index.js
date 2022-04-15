import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import './components/cpIcons/classpects.css';
import ClassSvg from './components/cpIcons/classSvg';
import MainApp from './app'


ReactDOM.render(
  <>
    <MainApp />
    <ClassSvg />
  </>
  ,
  document.getElementById('root')
);
