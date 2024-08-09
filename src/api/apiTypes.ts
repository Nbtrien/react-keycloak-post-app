export interface Post {
  id: number;
  title: string;
  brief: string;
  slug: string;
  content: string;
  categoryId: number;
  categoryName: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface AddNewPost {
  title: string;
  brief: string;
  slug: string;
  content: string;
  categoryId: number;
}

export interface AddNewCategory {
  name: string;
  slug: string;
}
// Example type for a response
export interface ApiResponse<T> {
  data: T;
  status: string;
  message: string;
}
