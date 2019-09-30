import React from 'react';
// import product from './products.json';
// import API from "../../utils/API"
import ListProducts from './ListProducts';
import {withRouter} from 'react-router-dom';
import './index.css';

class Products extends React.Component {
  state = {
      type: "",
      //category
      price: "",
      //monetary_value
      filteredProducts: [],
      products: null,
    }

  type = React.createRef();
  price = React.createRef();

  fetchContent() {
    const {type, price} = this.state
    let dataURL = '/api/products'
    if (type) {
      dataURL += `/type/${type}`
      // dataURL = dataURL + `/type/${type}`
    } else {
      dataURL += `/type/all`
    }
    if (price) {
      dataURL += `/price/${price}`
    } else {
      dataURL += `/price/all`
    }

    fetch(dataURL)
    .then(res => res.json())
    .then(items => {
      this.setState({
        products: items
      })
      // console.log(this.state.products)
    })
  }

  componentDidMount() {
    //get function fetch if 
    const {type, price} = this.props.match.params;
    this.setState({
      type: type,
      price: price
    })
    // this.fetchContent()
  };

  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate', this.state, oldState)
    if (this.state.type !== oldState.type || this.state.price != oldState.price) {
      this.fetchContent()
    }
    // make an if for price and category if they changed in state by comparing using prev.props
    // if (this.state.category !== prev.state.) {
      // this.fetchContent()
    // }
  }



  handleProductChange = (e) => {
    this.setState({
      type: this.type.current.value
    })
  };

  handlePriceChange = (e) => {
    console.log('price changed')
    this.setState({
      price: this.price.current.value
    })
  }


  render() {
      // let results = [];
      // results.push(<ListProducts title={prod.title} image={prod.image} alt={prod.alt} price={prod.price} description={prod.description}/>);

      const productResults = this.state.products
      //this sets it up so that if there's no data to work with in the beginning, it checks to see if there is data. you will always be null when you start the server and wait for the data to come back 
      // const products = (productResults !== null) 
      //     ? productResults 
      //     : "fail"

      //let = mapProducts because of scoping, so that it can be accessed 
      let mapProducts = []

      //if productsResults exists, then map through the things and reassign their names so that they can go in their respective spots
      if (productResults !== null) {
        console.log(productResults)

         mapProducts = productResults.map((
           {
             product_name: title,
             product_image: image,
             product_alt_desc: alt,
             item_description: description,
             price,
            }) => {
          return <ListProducts 
                  product={{title, image, alt, description, price}}
                  />
        });
      }
      console.log(mapProducts)


    return (
      <div className="main"> 
       <div className="desktop">
          <p id="slogan">Tell Us A Story.</p>
        </div>

       <form className="filter">
         <select ref={this.type} onChange= {this.handleProductChange}>
          <option value="all">All Products</option>
          <option value="cameras">Cameras</option>
          <option value="lens">Lens</option>
          <option value="tripods">Tripods</option>
          <option value="lights">Lights</option>
          <option value="camera-bags">Camera Bags</option>
          <option value="storage">Storage</option>
        </select>
        <select ref={this.price} onChange= {this.handlePriceChange}>
          <option value="all">All Prices</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
       </form>
    
      {productResults && mapProducts}

      {productResults == null && 
        <p>"Please wait, the page is loading"</p>
      }
      </div>
      
    );
  }
    
}

export default withRouter(Products);