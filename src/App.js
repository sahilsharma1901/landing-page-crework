import './App.css';
import BWU from './pages/BWU';
import About from './pages/About';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<BWU />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
