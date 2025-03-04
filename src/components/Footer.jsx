import React from 'react';
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
   
      

<footer className="bg-white shadow-sm  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">CineYard™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/"  rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</Link>
        </li>
        <li>
            <Link to="https://linkedin.com/in/sushant-sail-20182615a" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</Link>
        </li>
        <li>
            <Link to="/"  rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</Link>
        </li>
        <li>
            <Link to="https://github.com/SushantSail" rel="noreferrer" target="_blank" className="hover:underline">Github</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}
