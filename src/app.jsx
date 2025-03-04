import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Standings from "./Standings";
import Matches from "./Matches";
import Teams from "./teams/teams";
import Players from "./Players";
import Matchevents from "./Matchevents";
import Admin from "./Admin";
import NotFound from "./NotFound"; // 404 Page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
                <Route path="/matchevents" element={<Matchevents />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} /> {/* 404 Page */}
            </Routes>
        </Router>
    );
}

export default App;
