import React from "react";
import {
  GameNameList,
  JFW777_GAMES,
  YULE_GAMES,
} from "../../../../config/config";
import OpenGameLinkBtn from "../button/OpenGameLinkBtn";

// interface RenderGameTableProps {
//   handleOpenLink: (gameId: string) => void;
// }

const JfwGameTable: React.FC = () => {
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
        {JFW777_GAMES.map((gameId) => (
          <tr key={gameId} className="hover:bg-gray-500">
            <td className="py-4 px-4 border-b text-left">
              {GameNameList[gameId] ? GameNameList[gameId] : gameId}
            </td>
            <td className="py-4 px-4 border-b text-center">
              <OpenGameLinkBtn gameId={gameId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JfwGameTable;
