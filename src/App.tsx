import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import An225 from './pages/An225';
import An124 from './pages/An124';
import An178 from './pages/An178';
import An158 from './pages/An158';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/an-225" element={<An225 />} />
          <Route path="/an-124" element={<An124 />} />
          <Route path="/an-178" element={<An178 />} />
          <Route path="/an-158" element={<An158 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
