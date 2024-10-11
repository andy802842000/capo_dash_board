import React from "react";
import { DOMAIN } from "../../../../config/config";

interface OpenGameLinkBtnProps {
  gameId: string;
}

const OpenGameLinkBtn: React.FC<OpenGameLinkBtnProps> = ({ gameId }) => {
  function handleOpenLink(gameId: string) {
    const url = `${DOMAIN}/game/slotaku?gameId=${gameId}`;
    window.open(url, "_blank");
  }
  return (
    <button
      onClick={() => {
        handleOpenLink(gameId);
      }}
      className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
    >
      測試遊戲
    </button>
  );
};

export default OpenGameLinkBtn;
