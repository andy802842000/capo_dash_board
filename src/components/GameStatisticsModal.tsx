import React from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import { GameData } from "../types/GameData";

interface GameStatisticsModalProps {
  game: GameData;
  isOpen: boolean;
  onRequestClose: () => void;
}

const GameStatisticsModal: React.FC<GameStatisticsModalProps> = ({
  game,
  isOpen,
  onRequestClose,
}) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-50px)",
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="統計資訊"
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      ariaHideApp={false}
    >
      <animated.div
        style={modalAnimation}
        className="p-8 bg-gray-800 text-white rounded-lg shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          統計資訊 - {game.gameId}
        </h2>
        <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg">
          <thead>
            <tr className="bg-gray-600">
              <th className="py-3 px-4 border-b text-left">指標</th>
              <th className="py-3 px-4 border-b text-left">值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b">累計免費遊戲數量</td>
              <td className="py-3 px-4 border-b">
                {game.gameStatistic.totalFreeGame}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">平均免費遊戲數量</td>
              <td className="py-3 px-4 border-b">
                {game.gameStatistic.avgFreeGame}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">累計額外遊戲數量</td>
              <td className="py-3 px-4 border-b">
                {game.gameStatistic.totalBonusGame}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">平均額外遊戲數量</td>
              <td className="py-3 px-4 border-b">
                {game.gameStatistic.avgBonusGame}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b">累計遊戲數量</td>
              <td className="py-3 px-4 border-b">
                {game.gameStatistic.totalRound}
              </td>
            </tr>
            {/* 你可以根據需要添加更多統計資訊 */}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <button
            onClick={onRequestClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-200"
          >
            關閉
          </button>
        </div>
      </animated.div>
    </Modal>
  );
};

export default GameStatisticsModal;
