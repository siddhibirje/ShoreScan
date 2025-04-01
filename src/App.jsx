import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import GetInvolved from "./GetInvolved/GetInvolved";
import  CommunityEngage from "./ CommunityEngage/CommunityEngage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/CommunityEngage" element={<CommunityEngage />} />
      </Routes>
    </Router>
  );
}

export default App;

