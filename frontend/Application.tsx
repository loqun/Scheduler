import React from 'react'
import { createRoot } from 'react-dom/client';
import { ReactDOM } from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

 function Application() {
  return (
    <div className='bg-slate-300'>Application</div>
  )
}

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(

<BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
</BrowserRouter>    
);