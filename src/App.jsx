import React from 'react';
import MainLayout from './MainLayout'
import HomePage from "./HomePage"
import AboutMePage from "./AboutMePage"
import SkillsPage from "./SkillsPage"
import MyProjectPage from "./MyProjectPage"
import ContactMePage from "./ContactMePage"

import { Routes, Route } from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutMePage/>}/>
          <Route path="/skills" element={<SkillsPage/>}/>
          <Route path="/projects" element={<MyProjectPage/>}/>
          <Route path="/contact" element={<ContactMePage/>}/>
          </Route>
        </Routes>
  );
}

export default App;