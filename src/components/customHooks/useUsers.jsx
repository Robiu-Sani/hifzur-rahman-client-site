import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useUsers() {
  const { axiosSource } = useAxiosSource();

  const { data: Users = [], refetch } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await axiosSource.get(`/users`);
      return res.data;
    },
  });

  return { Users, refetch };
}
