import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { PlatformData } from "../types/PlatformData";
import { ACCESS, API_ENDPOINT, DOMAIN } from "../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface GroupedSidebarProps {
  onSelectPlatform: (platform: PlatformData) => void;
}

const GroupedSidebar: React.FC<GroupedSidebarProps> = ({
  onSelectPlatform,
}) => {
  const [platforms, setPlatforms] = useState<PlatformData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const initialized = useRef(false);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const getPlatformAPI =
          window.location.hostname === "localhost"
            ? "http://localhost:6001" + API_ENDPOINT.GET_PLATFORMS
            : DOMAIN + API_ENDPOINT.GET_PLATFORMS;

        const headers = { "access-token": ACCESS };
        const response = await axios.get<PlatformData[]>(getPlatformAPI, {
          headers,
        });
        const allPlatforms = response.data.filter(
          (x) => x.name != "benshawn" && x.name != "chegntest"
        );
        setPlatforms(allPlatforms);
        if (!initialized.current) {
          initialized.current = true;
          for (const p of allPlatforms) {
            if (p.name == "capoweb") {
              onSelectPlatform(p);
              break;
            }
          }
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch platforms");
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  const handleToggle = (group: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [group]: !prevExpanded[group],
    }));
  };

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

  // 分组平台
  const groupedPlatforms = platforms.reduce((groups, platform) => {
    const group = platform.name.startsWith("capoweb") ? "capoweb" : "others";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(platform);
    return groups;
  }, {} as { [key: string]: PlatformData[] });

  return (
    <div className="w-64 h-full bg-gray-900 text-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">平台</h2>
        <ul className="space-y-2">
          <li>
            <button
              className="flex p-2 rounded hover:bg-gray-700 w-full text-left justify-between items-center"
              onClick={() => handleToggle("capoweb")}
            >
              <span>capoweb</span>
              <FontAwesomeIcon
                className=""
                icon={expanded["capoweb"] ? faChevronUp : faChevronDown}
              />
            </button>
            {expanded["capoweb"] && (
              <ul className="pl-4">
                {groupedPlatforms["capoweb"]?.map((platform) => (
                  <li
                    key={platform.id}
                    className="block p-2 rounded hover:bg-gray-700 cursor-pointer"
                    onClick={() => onSelectPlatform(platform)}
                  >
                    {platform.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              className="flex p-2 rounded hover:bg-gray-700 w-full text-left justify-between items-center"
              onClick={() => handleToggle("yuleweb")}
            >
              <span>yuleweb</span>
              <FontAwesomeIcon
                icon={expanded["yuleweb"] ? faChevronUp : faChevronDown}
              />
            </button>
            {expanded["yuleweb"] && (
              <ul className="pl-4">
                <li
                  className="block p-2 rounded hover:bg-gray-700 cursor-pointer"
                  onClick={() => onSelectPlatform({ id: -1, name: "yuleweb" })}
                >
                  {"yuleweb"}
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="flex p-2 rounded hover:bg-gray-700 w-full text-left justify-between items-center"
              onClick={() => handleToggle("others")}
            >
              <span>其他平台</span>
              <FontAwesomeIcon
                icon={expanded["others"] ? faChevronUp : faChevronDown}
              />
            </button>
            {expanded["others"] && (
              <ul className="pl-4">
                {groupedPlatforms["others"]?.map((platform) => (
                  <li
                    key={platform.id}
                    className="block p-2 rounded hover:bg-gray-700 cursor-pointer"
                    onClick={() => onSelectPlatform(platform)}
                  >
                    {platform.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex p-2 rounded hover:bg-gray-700 w-full text-left justify-between items-center"
              onClick={() => handleToggle("thirds")}
            >
              <span>第三方平台</span>
              <FontAwesomeIcon
                icon={expanded["thirds"] ? faChevronUp : faChevronDown}
              />
            </button>
            {expanded["thirds"] && (
              <ul className="pl-4">
                <li
                  className="block p-2 rounded hover:bg-gray-700 cursor-pointer"
                  onClick={() =>
                    onSelectPlatform({ id: -1, name: "third-benshawn" })
                  }
                >
                  {"benshawn"}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GroupedSidebar;
