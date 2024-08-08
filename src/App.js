import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './Navigation';

function App() {
    return (
      <div className="App">
      <Navigation />
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;