import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="container brightness-400 flex h-14 max-w-screen-2xl items-center p-4 border-solid border-b-2 mb-4 relative 	">
      <div className="absolute inset-0 bg-white opacity-5 z-0 blur-sm	"></div>
      <div className="font-mono font-bold mx-8 text-xl">r/P</div>

      <ul className="z-10">
        <li className="navbar-item hover:text-sky-400 aria-selected:text-sky-400">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </div>
  );
}
