import { useState } from "react";
import handleAddBook from "../handlers/handleAddBook";
import useBooksContext from "../hooks/useBooksContext";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useBooksContext();
  return (
    <form
      onSubmit={(e) =>
        handleAddBook(e, title, author, dispatch, setTitle, setAuthor, setError)
      }
    >
      <input
        type="text"
        id="title"
        placeholder="Book title..."
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        id="author"
        placeholder="Author name..."
        required
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <input type="submit" value="Add book" />
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddBook;
