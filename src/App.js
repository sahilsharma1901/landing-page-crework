import { Routes, Route } from "react-router-dom";
import './App.css';
import BWU from './pages/BWU';
import About from './pages/About';
import Graduates from './pages/Graduates';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<BWU />} />
        <Route path="/about" element={<About />} />
        <Route path="/graduates" element={<Graduates />} />
      </Routes>
    </div>
  );
}

export default App;
