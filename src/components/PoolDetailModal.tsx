import React from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import { ExtendPoolData } from "../types/PoolData";

interface PoolDetailModalProps {
  pool: ExtendPoolData[] | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const PoolDetailModal: React.FC<PoolDetailModalProps> = ({
  pool,
  isOpen,
  onRequestClose,
}) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-50px)",
  });

  if (!pool) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="池詳細資訊"
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      ariaHideApp={false}
    >
      <animated.div
        style={modalAnimation}
        className="p-8 bg-gray-800 text-white rounded-lg shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">該區間詳細資訊</h2>
        <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg">
          <thead>
            <tr className="bg-gray-600">
              <th className="py-3 px-4 border-b text-left">注額區間</th>
              <th className="py-3 px-4 border-b text-left">累計下注額</th>
              <th className="py-3 px-4 border-b text-left">累計總贏彩</th>
              <th className="py-3 px-4 border-b text-left">累計RTP</th>
              <th className="py-3 px-4 border-b text-left">累計局數</th>
            </tr>
          </thead>
          <tbody>
            {pool.map((p, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-b">{p.betAmount}</td>
                <td className="py-3 px-4 border-b">{p.totalBet}</td>
                <td className="py-3 px-4 border-b">{p.totalWin}</td>
                <td className="py-3 px-4 border-b">{p.rtp}</td>
                <td className="py-3 px-4 border-b">{p.totalRound}</td>
              </tr>
            ))}
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

export default PoolDetailModal;
