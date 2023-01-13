const handleAddBook = (
  e,
  title,
  author,
  dispatch,
  setTitle,
  setAuthor,
  setError
) => {
  e.preventDefault();
  const book = JSON.stringify({ title, author });
  fetch("/api/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: book,
  })
    .then((res) => {
      if (res.ok) return res.json();
      else throw Error("Could not add book");
    })
    .catch((err) => {
      console.log(err.message);
      setError(err.message);
    })
    .then((data) => {
      dispatch({ type: "ADD_BOOK", payload: data });
      setTitle("");
      setAuthor("");
      setError(null);
    })
    .catch((err) => setError(err.message));
};
export default handleAddBook;
