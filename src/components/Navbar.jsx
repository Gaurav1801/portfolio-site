import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-900 to-blue-400 flex h-12">
        <div className="list-none flex justify-center mx-auto font-medium text-2xl items-center h-12">
          <li className="px-6 hover:text-blue-500">me</li>
          <li className="px-6  hover:text-blue-500">projects</li>
          <li className="px-5  hover:text-blue-500">contact</li>
        </div>
        <div className="me-3 pt-2 text-3xl hover:text-blue-800">
          <FaGithub />
        </div>
      </div>
    </div>
  );
}
