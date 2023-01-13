import { BookContext } from "../contexts/BookContext";
import { useContext } from "react";

const useBooksContext = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw Error("useBooksContext not used inside its context provider");
  } else {
    return context;
  }
};

export default useBooksContext;
