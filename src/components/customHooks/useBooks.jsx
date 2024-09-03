import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useBooks() {
  const { axiosSource } = useAxiosSource();
  const { data: books = [], refetch } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSource.get("/books");
      return res.data;
    },
  });
  return { books, refetch };
}
