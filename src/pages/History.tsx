import React, { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS, API_ENDPOINT, DOMAIN } from "../config/config";
import { useLocation } from "react-router-dom";

const History: React.FC = () => {
  const [historyId, setHistoryId] = useState("");
  const [historyData, setHistoryData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    console.log(
      "🦔🦔🦔🦔🦔 ~ useEffect ~ location.pathname:",
      location.pathname
    );
  }, []);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 使用正則表達式檢查輸入值是否全為數字
    if (/^\d*$/.test(value)) {
      setHistoryId(value);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setCopySuccess(null);
    try {
      const getHistoryAPI =
        window.location.hostname === "localhost"
          ? `http://localhost:6001${API_ENDPOINT.POST_HISTORY}`
          : `${DOMAIN}${API_ENDPOINT.POST_HISTORY}`;
      const headers = { "access-token": ACCESS };
      const response = await axios.post(
        getHistoryAPI,
        { historyId },
        { headers }
      );
      setHistoryData(response.data);
    } catch (err) {
      setError("無法獲取歷史紀錄資料");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (historyData) {
      navigator.clipboard
        .writeText(JSON.stringify(historyData, null, 2))
        .then(() => {
          setCopySuccess("複製成功！");
        })
        .catch(() => {
          setCopySuccess("複製失敗！");
        });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-white font-bold mb-4">歷史紀錄查詢</h1>
      <div className="mb-4">
        <input
          type="number"
          value={historyId}
          onChange={handleInputChange}
          placeholder="輸入 History ID"
          className="border rounded py-2 px-4 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          查詢
        </button>
      </div>
      {loading && <p>載入中...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {historyData && (
        <div className="mt-4">
          <h2 className="text-xl text-white font-bold mb-2">歷史紀錄</h2>
          <button
            onClick={handleCopy}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            複製
          </button>
          {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
          <pre className="bg-gray-100 p-4 rounded mb-2">
            {JSON.stringify(historyData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default History;
