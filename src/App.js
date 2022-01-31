import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <section className="App-body">
        <Router>
        <Header/>
          <Routes>
            <Route exact path="/" element={<MyProfile />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/rockets" element={<Rockets />} />
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
