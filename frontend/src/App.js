import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <footer>Copyright &copy; 2023</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
