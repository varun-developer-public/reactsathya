import { useEffect, useState } from "react";
import ProductCard from './components/productCard/productCard'
import RegistrationForms from "./Forms/forms";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function Home() {
  // const [products,setProducts] = useState([])
  // useEffect(()=>{
  //   fetch("https://dummyjson.com/products")
  //   .then(res=>res.json())
  //   .then(data=>setProducts(data.products))
  // },[products])
  // console.log(products);

  return (
    <div>
      <Routes>
        <Route index element={<RegistrationForms />} />
        <Route path="/products" element={<ProductCard/>}/>
      </Routes>
    </div>
  );
}

export default Home;
