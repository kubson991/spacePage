import Index from "./pages/index";
import Destination from "./pages/planet";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="Template">
      
        <Routes>
          <Route path="/" element={<Index />}>
          </Route>
          <Route path="/destination/:location" element={<Destination />}>
          </Route>
          <Route path="/crew/:member" element={<Crew />}>
          </Route>
          <Route path="/technology/:tech" element={<Technology />}>
          </Route>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
