import React from "react";
import { Link } from "react-router-dom";
import catLogo from "../assets/catLogo.webp";
import bannerBackground from "../assets/bannerBackground.webp";

interface NavbarLink {
  toPath: string;
  name: string;
}

const links: NavbarLink[] = [
  {
    toPath: "/dashboard/",
    name: "Dashboard",
  },
  {
    toPath: "/dashboard/history",
    name: "History",
  },
  {
    toPath: "/dashboard/settings",
    name: "Settings",
  },
];

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-gray-800 p-4 shadow-md flex justify-between items-center"
      // style={{
      //   backgroundImage: `url(${bannerBackground})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/dashboard/">
          <img
            src={catLogo}
            alt="Logo"
            className="w-16 h-16 rounded-full border-1 border-white inline-block mr-2"
          />
          <span className="text-white text-lg font-bold text-shadow">
            CAPO的家
          </span>
        </Link>
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-4">
        {links.map((navLink) => (
          <li key={navLink.name}>
            <Link
              to={navLink.toPath}
              className="text-white px-4 py-2 rounded-md text-shadow hover:text-blue-400"
            >
              <span className="">{navLink.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
