import { useEffect, useState } from 'react'
import ProductCard from './components/productCard/productCard'
import RegistrationForms from './Forms/forms'

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
        <h1>Home Page</h1>
        {/* {
          products.map((items)=>{
            return <ProductCard key={items.id} imglink={items.thumbnail} title={items.title} price={items.price}/>
          })
        } */}
        <RegistrationForms/>
    </div>
  )
}



export default Home