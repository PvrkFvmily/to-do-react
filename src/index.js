import React from 'react';
import ReactDOM from 'react-dom/client';
import MyList from './MyList';
import './index.css';

const toDos = ["Buy ice scream", "walk the garbage", "dirty the dishes", "clean the dishes"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyList theList={toDos} />
)