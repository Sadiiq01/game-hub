import { useEffect, useState } from "react";
import apiClient from "../services/api-clicnt";
import { CanceledError } from "axios";

interface fetchResopnse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, seData] = useState<T[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchResopnse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        seData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        else setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
