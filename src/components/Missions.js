/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/configureStore';

const JOIN_MISSION = { type: 'JOIN_MISSION' };

function Missions() {
  const missions = useSelector((state) => state.missions);
  const missionsArr = [];
  const MissionList = () => {
    missions.forEach((mission) => missionsArr.push(
      <tr key={mission.mission_id} className="divide-x">
        <td className="px-1 py-4">
          <div className="flex items-start text-left">
            <div className="flex-shrink-0 h-10 w-5 text-left" />
            <div className="ml-0 text-left">
              <div className="text-sm font-bold text-left text-gray-900">
                {mission.mission_name}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{mission.description}</div>
        </td>
        <td className="px-5 py-4 w-40">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${mission.member ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`}>
            {mission.member ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
          </span>
        </td>
        <td className="px-6 py-4 w-40 text-xs text-gray-500">
          <button
            type="button"
            className={`bg-white hover:font-bold  font-bold py-2 px-4 border-2 rounded ${mission.member ? 'border-red-800 text-red-800' : 'border-blue-800 text-blue-800'}`}
            onClick={() => { store.dispatch({ ...JOIN_MISSION, mission_id: mission.mission_id }); }}
          >
            {mission.member ? 'Leave mission' : 'Join mission'}

          </button>
        </td>
      </tr>,
    ));
    return missionsArr;
  };

  return (
    <div className="container ml-20 border mb-14">
      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50 divide-x">
          <tr className="divide-x">
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
              Mission
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <MissionList />
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
