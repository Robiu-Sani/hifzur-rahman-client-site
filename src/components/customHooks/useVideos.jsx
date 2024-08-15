import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useVideos() {
  const { axiosSource } = useAxiosSource();
  const { data: videos = [], refetch } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const res = await axiosSource.get("/videos");
      return res.data;
    },
  });
  return { videos, refetch };
}
