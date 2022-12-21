import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setErr(err);
      }
    };
    getData();
    return;
  }, [url]);

  return { data, loading, err };
};
