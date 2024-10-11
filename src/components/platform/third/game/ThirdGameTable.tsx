import React from "react";
import { GameNameList, THIRD_GAMES } from "../../../../config/config";

interface RenderGameTableProps {
  handleOpenLink: (gameId: string) => void;
}

const ThirdGameTable: React.FC<RenderGameTableProps> = ({ handleOpenLink }) => {
  return (
    <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
      <thead className="bg-gray-900 text-white">
        <tr>
          <th className="py-3 px-4 border-b border-gray-600 text-left">
            遊戲 ID
          </th>
          <th className="py-3 px-4 border-b border-gray-600 text-center">
            功能
          </th>
        </tr>
      </thead>
      <tbody>
        {THIRD_GAMES.map((gameId) => (
          <tr key={gameId} className="hover:bg-gray-500">
            <td className="py-4 px-4 border-b text-left">
              {GameNameList[gameId] ? GameNameList[gameId] : gameId}
            </td>
            <td className="py-4 px-4 border-b text-center">
              <button
                onClick={() => handleOpenLink(gameId)}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
              >
                測試遊戲
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ThirdGameTable;
