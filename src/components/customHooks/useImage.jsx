import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useImages() {
  const { axiosSource } = useAxiosSource();
  const { data: images = [], refetch } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const res = await axiosSource.get("/images");
      return res.data;
    },
  });
  return { images, refetch };
}
