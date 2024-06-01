import { useEffect, useState } from "react";

export default function useTopicFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Map<any, any> | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("./php/datiHome.php?getArgomenti", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch topics");

        const data = await res.json();
        const map = new Map();
        for (const { nomeArgomento, materia } of data) {
          const lowerMateria = materia.toLowerCase();
          const lowerArgomento = nomeArgomento.toLowerCase();
          if (!map.has(lowerMateria)) {
            map.set(lowerMateria, new Set([lowerArgomento]));
            continue;
          }
          map.set(lowerMateria, map.get(lowerMateria).add(lowerArgomento));
        }

        setData(map);
        setError(null);
      } catch (err: any) {
        setError(`${err.message}, please try again`);
      }

      setLoading(false);
    };

    fetchTopics();
  }, []);

  return {
    loading,
    error,
    data,
  };
}
