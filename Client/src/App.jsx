import { Button } from "@/components/ui/button";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ListView from "../src/pages/ListView";
import ProjectDash from "../src/pages/ProjectDash";
import Home from "../src/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<ListView/>} />
        <Route path="/detail" element={<ProjectDash/>} />
      </Routes>
      
    </Router>
  );
}
