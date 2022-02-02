import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const myMissionsArr = [];

  const MyMissions = (myMissionsData) => {
    if (myMissionsData.missions !== undefined) {
      myMissionsData.missions.filter((mission) => mission.member === true).forEach((mission) => {
        myMissionsArr.push(
          <tr key={mission.mission_id} className="border h-14">
            <td className="pl-5">{mission.mission_name}</td>
          </tr>,
        );
      });
    }
    return myMissionsArr;
  };

  return (
    <div className="flex mx-20">
      <div className="missions container">
        <h2 className="font-bold text-3xl pb-3">My Missions</h2>
        <table className="border w-11/12">
          <tbody>
            <MyMissions missions={missions} />
          </tbody>
        </table>
      </div>
      <div className="rockets container">
        <h2 className="font-bold text-3xl pb-3">My Rockets</h2>
        <table className="border w-11/12">
          <tbody>
            {/* the next <tr> element should be replaced with the correct rockets component */}
            <tr className="border h-14">
              <td className="pl-5">TEST</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
