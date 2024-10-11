import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { PlatformData } from "../types/PlatformData";
import {
  ACCESS,
  API_ENDPOINT,
  DOMAIN,
  GameNameList,
  NORMAL_GAMES,
  PLATFORM_GAMES,
  THIRD_GAMES,
  YULE_GAMES,
} from "../config/config";
import { GameData } from "../types/GameData";
import RTPTable from "./RTPTable";
import YuleGameTable from "./platform/yule/game/YuleGameTable";
import ThirdGameTable from "./platform/third/game/ThirdGameTable";
import JfwGameTable from "./platform/jfw/game/JfwGameTable";
import SlotakuGameTable from "./platform/slotaku/game/slotakuGameTable";

interface PlatformGamesProps {
  platform: PlatformData;
}

interface GameResponse {
  pool: GameData;
}

const PlatformGames: React.FC<PlatformGamesProps> = ({ platform }) => {
  const [games, setGames] = useState<GameResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isInitialMount = useRef(true);

  const fetchGames = async () => {
    try {
      const platformGames = PLATFORM_GAMES[platform.name] || NORMAL_GAMES;
      const gameRequests = platformGames.map((gameId) => {
        const getGamesAPI =
          window.location.hostname === "localhost"
            ? `http://localhost:6001${API_ENDPOINT.GET_GAMES.replace(
                ":platformId",
                platform.id.toString()
              )}?custId=${platform.id}&gameId=${gameId}`
            : `${DOMAIN}${API_ENDPOINT.GET_GAMES.replace(
                ":platformId",
                platform.id.toString()
              )}?custId=${platform.id}&gameId=${gameId}`;
        const headers = { "access-token": ACCESS };
        return axios.get<GameResponse>(getGamesAPI, { headers });
      });

      const responses = await Promise.all(gameRequests);
      const gamesData = responses.map((response) => response.data);
      setGames(gamesData);
      setLoading(false);
    } catch (err) {
      setError("無法獲取遊戲資料");
      setLoading(false);
    }
  };

  const handleOpenLink = (gameId: string) => {
    const url = `${DOMAIN}/game?gameId=${gameId}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    console.log("🦔🦔🦔🦔🦔 ~ platform:", platform);

    if (platform.name.includes("third") || platform.name.includes("yule")) {
      return;
    }
    // 初始化或平台變化時，先執行一次遊戲資料的獲取
    fetchGames();

    // 設定定期更新遊戲資料的定時器
    const interval = setInterval(fetchGames, 10000); // 每10秒更新一次
    return () => clearInterval(interval); // 組件卸載或平台變化時，清除定時器
  }, [platform]); // 依賴陣列中包含 platform，確保 platform 更新時重新設定定時器

  if (loading) {
    return <div>載入中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full bg-gray-900 text-white">
      <span className="block p-4 mb-4 text-xl font-bold">
        當前平台: {platform.name}
      </span>
      {platform.name.includes("third") || platform.name.includes("yule") ? (
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
            {platform.name.includes("yule") && (
              <YuleGameTable handleOpenLink={handleOpenLink} />
            )}
            {platform.name.includes("third") && (
              <ThirdGameTable handleOpenLink={handleOpenLink} />
            )}
          </tbody>
        </table>
      ) : (
        <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-3 px-4 border-b border-gray-600 text-left">
                遊戲 ID
              </th>
              <th className="py-3 px-4 border-b border-gray-600 text-center">
                功能
              </th>
              <th className="py-3 px-4 border-b border-gray-600 text-right">
                RTP 區域 1
              </th>
              <th className="py-3 px-4 border-b border-gray-600 text-right">
                RTP 區域 2
              </th>
              <th className="py-3 px-4 border-b border-gray-600 text-right">
                RTP 區域 3
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <RTPTable key={game.pool.gameId} game={game.pool} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PlatformGames;
