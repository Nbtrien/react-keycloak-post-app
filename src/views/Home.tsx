import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AxiosError } from "axios";
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>;
  }
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
                        HOME PAGE
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
