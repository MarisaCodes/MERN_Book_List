const handleDeleteBook = (id, books, dispatch, setError) => {
  fetch(`/api/books/${id}`, { method: "DELETE" })
    .then((res) => {
      if (res.ok) return res.json();
      else throw Error(`${res.status} ${res.statusText}`);
    })
    .catch((err) => setError(err.message))
    .then((deletedBook) => {
      console.log(deletedBook);
      const newBooks = books.filter((book) => book._id !== deletedBook._id);
      console.log(newBooks);
      dispatch({ type: "DELETE_BOOK", payload: newBooks });
    });
};
export default handleDeleteBook;
