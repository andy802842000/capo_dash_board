import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Dashboard: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(
      "🦔🦔🦔🦔🦔 ~ useEffect ~ location.pathname:",
      location.pathname
    );
  }, []);

  return <></>;
};

export default Dashboard;
