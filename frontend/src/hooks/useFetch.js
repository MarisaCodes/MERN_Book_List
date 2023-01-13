import { useEffect, useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

const useFetch = (path) => {
  const { books, dispatch } = useBooksContext();
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(path, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`${res.status} ${res.statusText}`);
        }
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      })
      .then((data) => {
        if (data) {
          if (data.error) {
            throw Error(data.error);
          } else {
            setError(null);
            dispatch({ type: "GET_BOOKS", payload: data });
          }
        }
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  }, []);
  return { books, dispatch, error, setError };
};
export default useFetch;
