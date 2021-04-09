import React, { useState, useEffect } from 'react';

const ManageProduct = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const deleteProduct = (id) =>{
    fetch(`http://localhost:3001/delete/${id}`,{
      method:'DELETE'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div className="container">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {
          products.map(product => {
            return (

              <>

                <tbody>
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button onClick={()=> deleteProduct(product._id)}>remove</button></td>
                  </tr>

                </tbody>

              </>
            )
          })
        }


      </table>
    </div>

  );
};

export default ManageProduct;