import React from 'react'
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found - CineYard`;
  } );

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className='max-w-xl'>
            <img className="rounded" src={PageNotFoundImage} alt="404 Page not found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <button className='w-64 py-1 text-xl rounded-lg text-white text-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Back to Home page</button>
          </Link>

        </div>
      </section>
    </main>
  )
}
