import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useNews() {
  const { axiosSource } = useAxiosSource();
  const { data: news = [], refetch } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axiosSource.get("/news");
      return res.data;
    },
  });
  return { news, refetch };
}
