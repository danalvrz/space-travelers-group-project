import React from 'react';
import { useSelector } from 'react-redux';
import MyRockets from './MyRockets';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const myMissionsArr = [];

  const MyMissions = () => {
    missions.filter((mission) => mission.member === true).forEach((mission) => {
      myMissionsArr.push(
        <tr key={mission.mission_id} className="border h-14">
          <td className="pl-5">{mission.mission_name}</td>
        </tr>,
      );
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
        <MyRockets />
      </div>
    </div>
  );
}

export default MyProfile;
