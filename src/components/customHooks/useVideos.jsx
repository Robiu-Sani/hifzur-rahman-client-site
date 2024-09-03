import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiousSorce";

export default function useVideos() {
  const { axiosSource } = useAxiosSource();
  const {
    data: videos = [],
    refetch,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      try {
        const res = await axiosSource.get("/videos");
        return res.data;
      } catch (err) {
        throw new Error("Failed to fetch videos" + err);
      }
    },
  });

  return { videos, refetch, error }; // Returning error for error handling in components
}
