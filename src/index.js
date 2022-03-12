import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from './components/home/Home';



ReactDOM.render(
  <BrowserRouter>
  
   <Home/>
  </BrowserRouter>
,
  document.getElementById('root')
);

