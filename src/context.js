import React, { Component } from 'react'
import {storeTrees,detailProduct} from './data';

const ProductContext = React.createContext();



 class ProductProvider extends Component {
  
  state ={
      products:[],
      detailProduct:detailProduct,
      cart:[],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubTotal: 0,
      cartTotal: 0
  };
  componentDidMount(){
    this.setProducts();
  };
  setProducts = () => {
    let products = [];
    storeTrees.forEach(item => {
      const singalItem = { ...item};
      products = [...products,singalItem];
    });
    this.setState(()=> {
      return { products};
    })
  };

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState(()=> {
        return {detailProduct:product}
      })
  };

  addToCart = id => {

    let tempProducts = [...this.state.products];

    // we need the index of the product to change its values
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    // changing the values in our data.js 
    product.inCart = true;
    product.count=1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] };
    }, ()=>{console.log(this.state);
    });
  };
 
  // cart modal Pop-up methods 
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct:product, modalOpen: true};
    });
  };

  closeModal = () => {
    this.setState(()=> {
      return {modalOpen:false};
    });
  };


  // cart page methods 
  increment = (id) => {
    console.log('this is increment method');
    
  }

  decrement = (id) => {
    console.log('this is decrement method');
    
  }

  removeItem = (id) => {
    console.log('item removed');
    
  }

  clearCart = () => {
    console.log('cart cleared');
    
  }

  
  render() {
    return (

      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart
      }}>

        {this.props.children}
        
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};