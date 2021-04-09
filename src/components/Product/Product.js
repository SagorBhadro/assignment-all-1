import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  // console.log(product)
  return (
    
    <>
     <div className="col-lg-4 col-md-6 col-sm-12">
     <div class="card mb-4">
  <img src={product.imageURL} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.author}.</p>
    <h5 class="card-title">{product.price}</h5>
    <Link to={`/book/${product._id}`} class="btn btn-primary">Buy Now</Link>
  </div>
</div>
     </div>
      
      {/* <img style={{height: '300px'}} src={product.imageURL} alt=""/>
      <h3>{product.name}</h3>
      <h5>{product.author}</h5>
      <h1>{product.price} <button><Link to={`/book/${product._id}`}>Buy Now</Link></button></h1> */}

    </>



  );
};

export default Product;