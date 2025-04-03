import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import GetInvolved from "./GetInvolved/GetInvolved";
import  CommunityEngage from "./CommunityEngage/CommunityEngage";
import  Login from "./Login/Login";
import  Report from "./Report/Report";
import ErosionMap from "./ErosionMap/ErosionMap";
import ErosionGraph from "./ErosionGraph/ErosionGraph";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/CommunityEngage" element={<CommunityEngage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/ErosionMap" element={<ErosionMap />} />
        <Route path="/ErosionGraph" element={<ErosionGraph />} />
    
      </Routes>
    </Router>
  </React.StrictMode>
);

