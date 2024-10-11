import React, { useState } from "react";
import { GameData } from "../types/GameData";
import PoolDetailModal from "./PoolDetailModal";
import GameStatisticsModal from "./GameStatisticsModal";
import { ExtendPoolData } from "../types/PoolData";
import { DOMAIN, GameNameList } from "../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import OpenGameLinkBtn from "./platform/jfw/button/OpenGameLinkBtn";

interface RTPTableProps {
  game: GameData;
}

const RTPTable: React.FC<RTPTableProps> = ({ game }) => {
  const [statisticsModalIsOpen, setStatisticsModalIsOpen] = useState(false);

  const [selectedPool, setSelectedPool] = useState<ExtendPoolData[] | null>(
    null
  );

  const openStatisticsModal = () => {
    setStatisticsModalIsOpen(true);
  };

  const closeStatisticsModal = () => {
    setStatisticsModalIsOpen(false);
  };

  const handleRTPClick = (poolIndex: number) => {
    let pools = [];
    for (let i = 0; i < game.basePools.length; i++) {
      if (game.basePools[i].poolIndex === poolIndex) {
        let p = JSON.parse(JSON.stringify(game.basePools[i])) as ExtendPoolData;
        p.betAmount = game.betLadder[i];
        pools.push(p);
      }
    }
    setSelectedPool(pools);
  };

  const handleOpenLink = () => {
    const url = `${DOMAIN}/game?gameId=${game.gameId}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <tr className="hover:bg-gray-500">
        <td className="py-4 px-4 border-b text-left">
          {GameNameList[game.gameId] ? GameNameList[game.gameId] : game.gameId}
        </td>
        <td className="border-b text-center">
          <div className="m-2 mr-8">
            <button
              onClick={openStatisticsModal}
              className="m-2 bg-gray-600 hover:bg-gray-400 text-white font-bold px-4 py-2 rounded-lg transition duration-200"
            >
              統計資訊
            </button>
            {game.customer.name == "capoweb" && (
              <>
                <button
                  onClick={handleOpenLink}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
                >
                  測試遊戲
                </button>
              </>
            )}
            {game.customer.name == "jfw777" && (
              <OpenGameLinkBtn gameId={game.gameId} />
            )}
            {game.customer.name == "slotaku" && (
              <OpenGameLinkBtn gameId={game.gameId} />
            )}
          </div>
        </td>
        {[0, 1, 2].map((index) => (
          <td key={index} className="py-4 px-4 border-b text-right">
            <div className="flex items-center justify-between">
              <FontAwesomeIcon
                icon={faSearch}
                className="ml-8  pl-32 text-blue-400 cursor-pointer"
                onClick={() => handleRTPClick(index)}
              />
              <span className="flex items-center">
                {game.primaryPool[index]?.rtp || "0"}%
              </span>
            </div>
          </td>
        ))}
      </tr>
      <GameStatisticsModal
        game={game}
        isOpen={statisticsModalIsOpen}
        onRequestClose={closeStatisticsModal}
      />
      <PoolDetailModal
        pool={selectedPool}
        isOpen={!!selectedPool}
        onRequestClose={() => setSelectedPool(null)}
      />
    </>
  );
};

export default RTPTable;
