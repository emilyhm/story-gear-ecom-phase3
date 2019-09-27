import React from 'react';
import product from './products.json';
import ListProducts from './ListProducts';
import './index.css';

class Products extends React.Component {
  state = {
      tag: "",
      val: "",
      filteredProducts: []
    }

  category = React.createRef();
  price = React.createRef();

  handleProductChange = (e) => {
    this.setState({
      tag: this.category.current.value
    })
  }

  handlePriceChange = (e) => {
    this.setState({
      val: this.price.current.value
    })
  }

  render() {
      let results = [];
 
    product.filter(prod=> {
      if(this.state.tag === "" || this.state.tag === "all"){
        results.push(<ListProducts title={prod.title} image={prod.image} alt={prod.alt} price={prod.price} description={prod.description}/>);
      }
      if(this.state.tag === prod.tag){
        results.push(<ListProducts title={prod.title} image={prod.image} alt={prod.alt} price={prod.price} description={prod.description}/>);
      }
    })

    product.filter(prod=> {
      if(this.state.val === "" || this.state.val === "allPrices"){
        results.push(<ListProducts title={prod.title} image={prod.image} alt={prod.alt} price={prod.price} description={prod.description}/>);
      }
      if(this.state.val === prod.val){
        results.push(<ListProducts title={prod.title} image={prod.image} alt={prod.alt} price={prod.price} description={prod.description}/>);
      }
    })

    return (
      <div className="main"> 
       <div class="desktop">
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
          <option value="allPrices">All Prices</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
       </form>
    
      {results}
      </div>
      
    );
  }
    
}

export default Products;