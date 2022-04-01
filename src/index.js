import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import TodoList from './TodoLIst';
import CoinApp from './CoinApp';
import MoviePrct from './MoviePrct';

ReactDOM.render(
  <React.StrictMode>
    {/* 
    <TodoList />
    <hr />
    <hr />
    <App />
    <hr />
    <App2 />
    <hr />
    <App3 /> 
    <CoinApp />
    */}
    <MoviePrct />
    
  </React.StrictMode>,
  document.getElementById('root')
);

