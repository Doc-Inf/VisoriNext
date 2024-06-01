import { getClientVideos } from "@/constants/functions";
import { ClientVideo, ServerVideo } from "@/constants/types";
import { useEffect, useState } from "react";

export default function useVideoFetching({ query = "" }: { query?: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ClientVideo[] | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("api/video-feed", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });
        if (!res.ok) throw new Error("Failed to fetch videos");

        const data: ServerVideo[] = await res.json();
        setData(getClientVideos(data));
        setError(null);
      } catch (err: any) {
        setError(`${err.message}, please try again`);
      }

      setLoading(false);
    };

    fetchVideo();
  }, [query]);

  return {
    loading,
    error,
    data,
  };
}
