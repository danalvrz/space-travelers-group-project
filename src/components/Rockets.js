import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsApi } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsApi());
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
