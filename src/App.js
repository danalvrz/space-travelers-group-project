import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Header from './components/Header';
import store from './redux/configureStore';
import { fetchRocketsApi } from './redux/rockets/rockets';

const missionBaseUrl = 'https://api.spacexdata.com/v3/missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsApi());
  }, []);

  useEffect(() => {
    const fetchMissionsData = () => {
      fetch(missionBaseUrl, { method: 'GET' })
        .then((response) => response.json()
          .then((data) => store.dispatch({ type: 'FETCH_MISSIONS', payload: data })));
    };
    fetchMissionsData();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route exact path="/myProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
