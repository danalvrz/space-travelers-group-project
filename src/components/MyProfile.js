import React from 'react';
import { useSelector } from 'react-redux';
import MyRockets from './MyRockets';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const myMissionsArr = [];

  const MyMissions = () => {
    missions.forEach((mission) => {
      if (mission.member) {
        myMissionsArr.push(
          <tr key={mission.mission_id} className="border h-14">
            <td className="pl-5">{mission.mission_name}</td>
          </tr>,
        );
      }
    });
    return myMissionsArr;
  };

  return (
    <div className="flex mx-20">
      <div className="missions container">
        <h2 className="font-bold text-3xl pb-3">My Missions</h2>
        <table className="border w-11/12">
          <tbody>
            <MyMissions />
          </tbody>
        </table>
      </div>
      <div className="rockets container">
        <h2 className="font-bold text-3xl pb-3">My Rockets</h2>
        {rockets.forEach((rocket) => {
          if (rocket.reserve) {
            <MyRockets key={rocket.id} rocket={rocket} />
          }
        })
        }
      </div>
    </div>
  );
}

export default MyProfile;
