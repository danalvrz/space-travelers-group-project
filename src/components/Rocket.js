import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';
import './Rocket.css';
import store from '../redux/configureStore';

const Rocket = ({ rocket }) => {
  const rocketReservation = () => {
    store.dispatch(reserveRocket(rocket));
  };

  return (
    <div className="rocket">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="text">
        <h2>{rocket.rocket_name}</h2>
        <p>
          <span className={`${rocket.reserve ? 'reserved' : 'reserve'}`}> Reserved </span>
          {rocket.description}
        </p>
        <button type="submit" className={`${rocket.reserve ? 'border-neutral-500 text-neutral-500' : 'bg-sky-400'} rounded-full`} onClick={rocketReservation}>{rocket.reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

export default Rocket;
