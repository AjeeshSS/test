// App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:userId" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
