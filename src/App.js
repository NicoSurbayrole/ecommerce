import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomeItems from "./components/HomeItems/HomeItems";
import SimpleProduct from "./components/SimpleProduct/SimpleProduct";
import Category from "./components/CategoryCoponents/Cateory";

function App() {

  return (
    <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeItems />} />
            <Route path="/products" element={<HomeItems />} />
            <Route path="/item/:productId" element={<SimpleProduct/>}/>
            <Route path="/category/:categoryId" element={<Category/>}/>          
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
