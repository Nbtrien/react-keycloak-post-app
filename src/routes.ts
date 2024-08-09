import CreateCategory from "./views/CreateCategory";
import CreatePost from "./views/CreatePost";
import ListCategory from "./views/ListCategory";
import ListPost from "./views/ListPost";
import UserPost from "./views/UserPost";

export const UserRoutes = [
  { path: "user/create-posts", name: "Dashboard", element: CreatePost },
  { path: "user/list-posts", name: "User", element: UserPost },
];

export const AdminRoutes = [
  {
    path: "admin/create-categories",
    name: "Dashboard",
    element: CreateCategory,
  },
  { path: "admin/list-categories", name: "User", element: ListCategory },
  { path: "admin/list-posts", name: "User", element: ListPost },
];
