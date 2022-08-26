import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
    <Navbar/>
    <Search/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>
  );
}

export default App;
