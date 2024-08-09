import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AxiosError } from "axios";
import useApiService from "../api/useApiService";
import { AddNewPost, Category } from "../api/apiTypes";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [brief, setBrief] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categoryId, setCategoryid] = useState<number>();
  const [categories, setCategories] = useState<Category[]>([]);

  const api = useApiService();

  const handleBriefChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBrief(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategoryid(Number(event.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const post: AddNewPost = {
      title: title,
      brief: brief,
      slug: slug,
      content: content,
      categoryId: categoryId ? categoryId : 0,
    };
    try {
      const response = await api.addNewPost(post);
      alert("Successfully!");
      setTitle("");
      setSlug("");
      setBrief("");
      setContent("");
      setCategoryid(undefined);
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

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.getAllCategories();
        setCategories(response);
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
    getCategories();
  }, []);

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
                        Create Post
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto pb-4">
                  <form className="px-4 mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Brief
                      </label>
                      <textarea
                        value={brief}
                        onChange={handleBriefChange}
                        cols={5}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Content
                      </label>
                      <textarea
                        value={content}
                        onChange={handleContentChange}
                        cols={10}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Category
                      </label>
                      <select
                        value={categoryId}
                        onChange={handleCategoryChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      >
                        <option value="" disabled selected>
                          Category
                        </option>
                        {categories?.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
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

export default CreatePost;
