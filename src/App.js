import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import CaseStudy from './pages/CaseStudy';
import Logout from './pages/Logout'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Notes from './pages/Notes'


function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="notes" element={<Notes />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
       
       
        


       
      </Routes>
    </>
  );
}

export default App;
