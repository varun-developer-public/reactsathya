import './productCard.css'
function ProductCard({imglink,title,price}) {
  return (
    <>
    <div className="productCard">
       <div className="products">
        <img src={imglink} alt="" />
       </div>
       <div className="products">
        <h3>{title}</h3>
        <ul>
            <li>ram</li>
            <li>ram</li>
            <li>display</li>
            <li>6th gen</li>
        </ul>
       </div>
       <div className="products">
        <h3>price: {price}</h3>
       </div>
    </div>
    </>
  )
}

export default ProductCard