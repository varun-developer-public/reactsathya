import ProductCard from './components/productCard/productCard'

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <ProductCard imglink={"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70&crop=false"} title="Title 1" price={53200}/>
        <ProductCard imglink={"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70&crop=false"} title="Title 2" price={8484}/>
        <ProductCard imglink={"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70&crop=false"} title="Title 3" price={4484}/>
        <ProductCard imglink={"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70&crop=false"} title="Title 4" price={85522}/>

    </div>
  )
}



export default Home