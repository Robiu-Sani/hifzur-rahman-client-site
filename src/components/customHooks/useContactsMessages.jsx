import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useContactsMessages() {
  const { axiosSource } = useAxiosSource();
  const { data: ContactsMessages = [], refetch } = useQuery({
    queryKey: ["ContactsMessages"],
    queryFn: async () => {
      const res = await axiosSource.get("/ContactsMessages");
      return res.data;
    },
  });
  return { ContactsMessages, refetch };
}
