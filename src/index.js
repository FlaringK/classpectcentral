import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css';
import './components/cpIcons/classpects.css';
import ClassSvg from './components/cpIcons/classSvg';
import ClasspectIcon from './components/cpIcons/classpectIcon';
import ClasspectHighlight from './components/cpIcons/classpectHighlight';
import Header from './components/header';

ReactDOM.render(
  <div>
    <Header />
    <ClasspectHighlight 
      title="The classpect of the day is:"
      highlight={["heir", "breath"]}
      classpects={[
        ["heir", "breath"],
        ["seer", "light"],
        ["knight", "time"],
        ["witch", "space"],
      ]}
    />

    <ClassSvg />
  </div>
  ,
  document.getElementById('root')
);
