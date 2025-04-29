import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import GetInvolved from "./GetInvolved/GetInvolved";
import CommunityEngage from "./CommunityEngage/CommunityEngage";
import Login from "./Login/Login";
import Report from "./Report/Report";
import ErosionMap from "./ErosionMap/ErosionMap";
import ErosionGraph from "./ErosionGraph/ErosionGraph";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/CommunityEngage" element={<CommunityEngage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/ErosionMap" element={<ErosionMap />} />
        <Route path="/ErosionGraph" element={<ErosionGraph />} />
      </Routes>
    </div>
  );
}

export default App;

