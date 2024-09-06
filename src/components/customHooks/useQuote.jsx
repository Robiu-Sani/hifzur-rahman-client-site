import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useQuote() {
  const { axiosSource } = useAxiosSource();
  const { data: quotes = [], refetch } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const res = await axiosSource.get("/quotes");
      return res.data;
    },
  });
  return { quotes, refetch };
}
