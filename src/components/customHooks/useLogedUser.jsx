import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useLoggedUser() {
  const email = localStorage.getItem("userEmail");
  const { axiosSource } = useAxiosSource();

  const { data: loggedUser = null, refetch } = useQuery({
    queryKey: ["loggedUser", email],
    queryFn: async () => {
      if (!email) {
        return null; // If there's no email in localStorage, return null
      }
      const res = await axiosSource.get(`/users/${email}`);
      return res.data;
    },
    enabled: !!email, // This ensures the query only runs if email exists
  });

  return { loggedUser, refetch };
}
