import React from "react";

const MyRockets = ({ rocket }) => ( 
        <table className="border w-11/12">
          <tbody>
            <tr className="border h-14">
              <td className="pl-5">{rocket.rocket_name}</td>
            </tr>
          </tbody>
        </table>
);

export default MyRockets;