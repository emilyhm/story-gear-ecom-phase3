import React from 'react';

function ListProducts(props) {
    return (
    <div>
        <div className="box desktop">
          <div className="left">
            <h2 className="prodTitle">{props.title}</h2>
            <img className="prodImg" src={props.image} alt={props.alt}/>
            <p className="price">{props.price}</p>
            <p className="description">{props.description}</p>
          </div>
        </div>
    </div>
    )
}

export default ListProducts;