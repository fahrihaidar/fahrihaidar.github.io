import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
