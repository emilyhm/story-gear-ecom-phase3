import React from 'react';
// import product from './products.json';
// import API from "../../utils/API"
import ListProducts from './ListProducts';
import './index.css';

class Products extends React.Component {
  state = {
      category: "",
      //category
      monetary_value: "",
      //monetary_value
      filteredProducts: [],
      products: null,
    }

  category = React.createRef();
  price = React.createRef();

  fetchContent() {
    const dataURL = 'http://localhost:3001/api/products'
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
    this.fetchContent()
  };

  componentDidUpdate() {
    // make an if for price and category if they changed in state by comparing using prev.props
    // if (this.state.category !== prev.state.) {
      this.fetchContent()
    // }
  }



  handleProductChange = (e) => {
    // event.preventDefault();
    // API.getProducts(this.setState.category)
    //   .then(res => 
    //     this.setState({
    //       category: res.data
    //       // this.category.current.value
    //     }))
    //     .catch(err => console.log(err));
  };

  handlePriceChange = (e) => {
    this.setState({
      monetary_value: this.price.current.value
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
         mapProducts = productResults.map(prod => {
          return <ListProducts 
                  title={prod.product_name} 
                  mage={prod.product_image} 
                  alt={prod.product_alt_desc} 
                  price={prod.price} 
                  description={prod.item_description}
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
         <select ref={this.category} onChange= {this.handleProductChange}>
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

export default Products;