import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6 bg-slate-900 text-white">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="font-bold uppercase">
            Skill <span className="text-orange-500">Tester</span>
          </Link>
        </div>

        <ul className="flex items-center justify-between gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
