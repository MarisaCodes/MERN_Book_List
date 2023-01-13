import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import Header from "../components/Header";
import { BookContextProvider } from "../contexts/BookContext";

const Home = () => {
  return (
    <main className="wrapper">
      <Header />
      <BookContextProvider>
        <BookList />
        <AddBook />
      </BookContextProvider>
    </main>
  );
};

export default Home;
