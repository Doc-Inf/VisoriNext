import { useEffect, useState } from "react";

export default function useSubjectFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("api/subjects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch subjects");

        const data = await res.json();
        setData(["all", ...data]);
        setError(null);
      } catch (err: any) {
        setError(`${err.message}, please try again`);
      }

      setLoading(false);
    };

    fetchSubjects();
  }, []);

  return {
    loading,
    error,
    data,
  };
}
