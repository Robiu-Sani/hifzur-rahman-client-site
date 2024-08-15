import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useProgramms() {
  const { axiosSource } = useAxiosSource();
  const { data: programms = [], refetch } = useQuery({
    queryKey: ["programms"],
    queryFn: async () => {
      const res = await axiosSource.get("/programms");
      return res.data;
    },
  });
  return { programms, refetch };
}
