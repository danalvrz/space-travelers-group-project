import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';
import './Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const rocketReservation = () => {
    dispatch(reserveRocket(rocket));
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
        <button type="submit" className={` text-center ${rocket.reserve ? 'border-neutral-500 text-neutral-500' : 'bg-sky-400'} rounded-full`} onClick={rocketReservation}>{rocket.reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserve: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
