import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

const ProductCard = ({product}) => {

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.3)",
        activeColor: "#6a88e7",
        size:window.innerWidth < 600 ? 20 : 19,
        value: product.ratings,
        isHalf:true
      };

    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options}/>
            </div>
                <span>({product.numOfReviews} reviews)</span>
            <span>{`₹${product.price}`}</span>
        </Link>
    )
}

export default ProductCard
