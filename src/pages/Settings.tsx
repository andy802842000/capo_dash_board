import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Settings: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(
      "🦔🦔🦔🦔🦔 ~ useEffect ~ location.pathname:",
      location.pathname
    );
  }, []);
  return (
    <div>
      {/* <h1>Settings</h1>
      <p>這裡可以修改遊戲伺服器的設定。</p> */}
    </div>
  );
};

export default Settings;
