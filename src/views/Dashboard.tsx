import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AxiosError } from "axios";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full"></div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap"></div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl-12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Users
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          ID
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Username
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <footer className="block py-4">
            <div className="container mx-auto px-4">
              <hr className="mb-4 border-b-1 border-blueGray-200" />
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © {new Date().getFullYear()}{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                    >
                      Creative Tim
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-8/12 px-4">
                  <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                    <li>
                      <a
                        href="https://www.creative-tim.com"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://blog.creative-tim.com"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        MIT License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
