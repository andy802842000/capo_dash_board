import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlatformData } from "../types/PlatformData";
import { API_ENDPOINT, DOMAIN } from "../config/config";

const Sidebar: React.FC = () => {
  const [platforms, setPlatforms] = useState<PlatformData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const getPlatformAPI =
          window.location.hostname === "localhost"
            ? "http://localhost:6001" + API_ENDPOINT.GET_PLATFORMS
            : DOMAIN + API_ENDPOINT.GET_PLATFORMS;
        const response = await axios.get<PlatformData[]>(getPlatformAPI);
        setPlatforms(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch platforms");
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  if (loading) {
    return (
      <div className="w-64 h-full bg-gray-900 text-white shadow-md p-4">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-64 h-full bg-gray-900 text-white shadow-md p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="w-64 h-full bg-gray-900 text-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">平台</h2>
        <ul className="space-y-2">
          {platforms.map((platform) => (
            <li
              key={platform.id}
              className="block p-2 rounded hover:bg-gray-700"
            >
              {platform.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
