import React from 'react';
import { useSelector } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  let rocketsReserved = null;

  if (rockets !== undefined) {
    rocketsReserved = rockets.filter((rocket) => rocket.reserve === true);

    return (
      <table className="border w-11/12">
        <tbody>
          {rocketsReserved.map((rocket) => (
            <tr key={rocket.id} className="border h-14">
              <td className="pl-5">{rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return [];
};

export default MyRockets;
