import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

import { PlatformData } from "./types/PlatformData";
import GroupedSidebar from "./components/GroupSidebar";
import PlatformGames from "./components/PlatformGames";
import History from "./pages/History";

const App: React.FC = () => {
  const location = useLocation();
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformData | null>(
    null
  );

  const handleSelectPlatform = (platform: PlatformData) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        {location.pathname === "/dashboard/" && (
          <GroupedSidebar onSelectPlatform={handleSelectPlatform} />
        )}

        <div className="w-full bg-gray-700 border-solid border-4 border-gray-600  shadow-md">
          <Routes>
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/history" element={<History />} />
          </Routes>
          {location.pathname === "/dashboard/" ? (
            <>
              {selectedPlatform && (
                <PlatformGames platform={selectedPlatform} />
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
