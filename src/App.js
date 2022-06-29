import { Routes, Route } from "react-router-dom";
import './App.css';
import BWU from './pages/BWU';
import Beginner from './pages/Beginner';
import About from './pages/About';
import Parent from "./pages/Parent";
import Success from "./pages/Success";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<Parent />} />
        <Route path="/bwu" element={<BWU />} />
        <Route path="/beginners" exact element={<Beginner />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
