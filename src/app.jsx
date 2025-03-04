import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MatchEvents from "./pages/MatchEvents";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/matchevents" element={<MatchEvents />} />
            </Routes>
        </Router>
    );
}

export default App;
