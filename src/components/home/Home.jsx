import { Route , Routes } from 'react-router-dom';
import React from 'react';
import HomeIndex from './HomeIndex';
import Services from '../services/Services';

import Contact from '../contactus/Contact';
import About from '../aboutus/About';
import Skills from '../skills/Skills';

import Error from '../error/Error';


function Home() {
  return (
    <>
  
    <Routes>
      <Route exact path='/contact' element={ <Contact/>} />
      <Route exact path='/home' element={ <HomeIndex/>} />
      <Route exact path='/about' element={ <About/>} />
      <Route exact path='/service' element={ <Services/>} />
      <Route exact path='/skill' element={ <Skills/>} />
      <Route exact path='/' element={ <HomeIndex/>} />
     
      <Route  element={ <Error/>} />
     

      
    </Routes>
   
   
  
    
    </>
   
  
  );
}

export default Home;
