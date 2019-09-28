import React from 'react';

function ListProducts({product}) {
  const { title, image, alt, price, description } = product
    return (
    <div>
        <div className="box desktop">
          {/* can use database id as the unique react key */}
          <div className="left">
            <h2 className="prodTitle">{title}</h2>
            <img className="prodImg" src={image} alt={alt}/>
            <p className="price">${price}</p>
            <p className="description">{description}</p>
          </div>
        </div>
    </div>
    )};

export default ListProducts;