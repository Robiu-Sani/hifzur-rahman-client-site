import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useBlogs() {
  const { axiosSource } = useAxiosSource();
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSource.get("/blogs");
      return res.data;
    },
  });
  return { blogs, refetch };
}
