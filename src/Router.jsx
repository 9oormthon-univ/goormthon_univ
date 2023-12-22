import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './@pages/About';
// import Project from './@pages/Project';
import Recruit from './@pages/Recruit';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </BrowserRouter>
  );
}
