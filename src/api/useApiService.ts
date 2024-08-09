import { AddNewCategory, AddNewPost, Category, Post } from "./apiTypes";
import useAxios from "./useAxios";

const useApiService = () => {
  const apiRequest = useAxios();
  const api = {
    getAllCategories: async (): Promise<Category[]> => {
      const data = await apiRequest({ url: "/categories", requiresAuth: true });
      return data;
    },
    addNewCategory: async (category: AddNewCategory): Promise<any> => {
      const data = await apiRequest({
        url: "/categories",
        method: "POST",
        data: category,
        requiresAuth: true,
      });
      return data;
    },
    addNewPost: async (post: AddNewPost): Promise<any> => {
      const data = await apiRequest({
        url: "/posts",
        method: "POST",
        data: post,
        requiresAuth: true,
      });
      return data;
    },
    getAllPosts: async (): Promise<Post[]> => {
      const data = await apiRequest({ url: "/posts", requiresAuth: true });
      return data;
    },
    getUserPosts: async (): Promise<Post[]> => {
      const data = await apiRequest({ url: "/posts/user", requiresAuth: true });
      return data;
    },
  };

  return api;
};

export default useApiService;
