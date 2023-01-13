import handleDeleteBook from "../handlers/handleDeleteBook";
import useFetch from "../hooks/useFetch";
const BookList = () => {
  const { books, dispatch, error, setError } = useFetch("/api/books");

  return (
    <section className="book-list">
      {books &&
        // !error &&
        books.map((book) => (
          <div
            className="book"
            key={book._id}
            onClick={() =>
              handleDeleteBook(book._id, books, dispatch, setError)
            }
          >
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
          </div>
        ))}
      {error && <div>{error}</div>}
    </section>
  );
};

export default BookList;
