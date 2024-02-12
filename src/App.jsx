import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Sorter from "./components/Sorter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="main">
        <Sorter />
        <ProductList />
      </div>
    </>
  );
}

export default App;
