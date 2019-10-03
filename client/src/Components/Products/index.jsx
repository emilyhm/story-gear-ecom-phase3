import React from 'react';
import ListProducts from './ListProducts';
import {withRouter} from 'react-router-dom';
import './index.css';

class Products extends React.Component {
  state = {
      //"category" in MySQL
      type: "",
      //"monetary_value" in MySQL
      price: "",
      products: null,
    };

  type = React.createRef();
  price = React.createRef();

  fetchContent() {
    const {type, price} = this.state;
    let dataURL = '/api/products';

    // depending on the type or price that the client chooses, it will affect the outcome of the if else statement
    if (type) {
      dataURL += `/type/${type}`
      // above is equivalent to --> dataURL = dataURL + `/type/${type}`
    } else {
      dataURL += `/type/all`
    };
    //price filter
    if (price) {
      dataURL += `/price/${price}`
    } else {
      dataURL += `/price/all`
    };

    // fetches data from database
    fetch(dataURL)
    .then(res => res.json())
    // takes the data and turns it into json
    .then(items => {
      this.setState({
        products: items
        // sets state to all the items that were brought back
      });
    });
  };

  // finish commenting this one!
  componentDidMount() {
    //how does this work if it isnt using fetchContent?
    const {type, price} = this.props.match.params;
    console.log(this.props.match.params)
    this.setState({
      type: type,
      price: price
    });
    // this.fetchContent()
  };

  // once the user changes the filter, the if statement below will compare the previous state to the present, therefore determining if it will go and fetch the data again using a different api address
  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate', this.state, oldState)
    if (this.state.type !== oldState.type || this.state.price !== oldState.price) {
      this.fetchContent()
      // make an if for price and category if they changed in state by comparing using prev.props
    };
  };

  // changes state when this filter is changed for product type
  handleProductChange = (e) => {
    this.setState({
      type: this.type.current.value
    });
  };

  // changes state when this filter is changed for price
  handlePriceChange = (e) => {
    this.setState({
      price: this.price.current.value
    });
  };

  render() {
      const productResults = this.state.products;
      
      //let = mapProducts because of scoping, so that it can be accessed in other areas as well
      let mapProducts = [];
      
      //used destructuring, if productsResults exists, then map through the things and reassign their names so that they can go in their respective spots
      if (productResults !== null) {
        mapProducts = productResults.map(( {
          // value: renamedToSomethingElse/Alias
            product_name: title,
            product_image: image,
            product_alt_desc: alt,
            item_description: description,
            price,
          }) => {
            // pass this data through to the ListProducts, where it will be placed in the proper html structure using destructuring
            return <ListProducts 
            product={{title, image, alt, description, price}}
            />
          });
        };
        
      //this sets up a function so that if there's any data to work with in the beginning. you will always be null when you start the server and wait for the data to be sent, and then it will render it to the page
      this.presentation = () => {  
        if (productResults == null) {
          return <p>"Please wait, the page is loading"</p>
        } 
        if (productResults !== null) {
          return productResults && mapProducts
        }};

    return (
      <div className="main"> 
        <div className="desktop">
          <p id="slogan">Tell Us A Story.</p>
        </div>

        {/* dropdown options for type */}
        <form className="filter">
          <select className="select" ref={this.type} onChange= {this.handleProductChange}>
          <option value="all">All Products</option>
          <option value="cameras">Cameras</option>
          <option value="lens">Lens</option>
          <option value="tripods">Tripods</option>
          <option value="lights">Lights</option>
          <option value="camera-bags">Camera Bags</option>
          <option value="storage">Storage</option>
        </select>
        {/* dropdown options for price */}
        <select className="select" ref={this.price} onChange= {this.handlePriceChange}>
          <option value="all">All Prices</option>
          <option value="low">Low (0-499 USD)</option>
          <option value="medium">Medium (500-999 USD)</option>
          <option value="high">High (1000+ USD)</option>
        </select>
        </form>
      
        {/* if data, render. if no data, 'please wait' */}
        {this.presentation()}
      </div>
    );
  };
};

export default withRouter(Products);