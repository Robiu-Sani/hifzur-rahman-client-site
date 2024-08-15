import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useContacts() {
  const { axiosSource } = useAxiosSource();
  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axiosSource.get("/contacts");
      return res.data;
    },
  });
  return { contacts, refetch };
}
