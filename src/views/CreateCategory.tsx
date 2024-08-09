import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AxiosError } from "axios";
import useApiService from "../api/useApiService";
import { AddNewCategory, AddNewPost, Category } from "../api/apiTypes";

const CreateCategory = () => {
  const [name, setName] = useState<string>("");
  const [slug, setSlug] = useState<string>("");

  const api = useApiService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const category: AddNewCategory = {
      name: name,
      slug: slug,
    };
    try {
      const response = await api.addNewCategory(category);
      alert("Successfully!");
      setName("");
      setSlug("");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData = error?.response?.data;
        if (errorData?.code === 403) {
          console.log("You don't have permission to access this resource!!");
        } else {
          console.log(errorData?.message);
        }
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full"></div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-40">
          <div className="flex flex-wrap"></div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl-12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h1 className="font-semibold text-3xl text-blueGray-700">
                        Create Category
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto pb-4">
                  <form className="px-4 mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Slug
                      </label>
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
