import React, { Component } from "react";
import {
  storeTrees,
  detailProduct,
  deliveryTypes,
  storeTools,
  detailTools,
  storeSoils,
  detailSoils
} from "./data";

const ProductContext = React.createContext();
const ToolContext = React.createContext();
const SoilContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartTotal: 0,
    deliveryCost: 0
  };

  componentDidMount() {
    //this.setProducts();
    fetch("/api/trees")
      .then(res => res.json())
      .then(products =>
        this.setState({ products }, () => console.log("products:", products))
      );

    console.log("did mount: ");
    console.log(this.state.products);
  }

  setProducts = () => {
    let products = [];
    storeTrees.forEach(item => {
      const singalItem = { ...item };
      products = [...products, singalItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];

    // we need the index of the product to change its values
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    // changing the values in our data.js
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // cart modal Pop-up methods
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // cart page methods

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];

    product.count = product.count - 1;

    // to remove the item form the cart if the quantity is 0
    if (product.count === 0) {
      this.removeItem(id);
    }
    // to show the total price of the remaining items if the quantity is larger than 0 .
    else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let carttotal = 0;
    this.state.cart.map(item => (carttotal += item.total));

    this.setState(() => {
      return {
        cartTotal: carttotal
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

class ToolProvider extends Component {
  state = {
    tools: [],
    detailTools: detailTools,
    toolscart: [],
    modalOpen: false,
    modalTool: detailTools,
    cartTotal: 0,
    deliveryCost: 0
  };

  componentDidMount() {
    //this.setProducts();
    fetch("/api/tools")
      .then(res => res.json())
      .then(tools =>
        this.setState({ tools }, () => console.log("tools:", tools))
      );

    console.log("did mount: ");
    console.log(this.state.tools);
  }

  setTools = () => {
    let tools = [];
    storeTools.forEach(item => {
      const singalItem = { ...item };
      tools = [...tools, singalItem];
    });
    this.setState(() => {
      return { tools };
    });
  };

  getItem = id => {
    const tool = this.state.tools.find(item => item.id === id);
    return tool;
  };

  handleDetail = id => {
    const tool = this.getItem(id);
    this.setState(() => {
      return { detailTools: tool };
    });
  };

  addToCart = id => {
    let tempTools = [...this.state.tools];

    // we need the index of the product to change its values
    const index = tempTools.indexOf(this.getItem(id));
    const tool = tempTools[index];

    // changing the values in our data.js
    tool.inCart = true;
    tool.count = 1;
    const price = tool.price;
    tool.total = price;
    this.setState(
      () => {
        return { tools: tempTools, cart: [...this.state.cart, tool] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // cart modal Pop-up methods
  openModal = id => {
    const tool = this.getItem(id);

    this.setState(() => {
      return { modalTool: tool, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // cart page methods

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedItem);
    const tool = tempCart[index];

    tool.count = tool.count + 1;
    tool.total = tool.count * tool.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedItem);

    const tool = tempCart[index];

    tool.count = tool.count - 1;

    // to remove the item form the cart if the quantity is 0
    if (tool.count === 0) {
      this.removeItem(id);
    }
    // to show the total price of the remaining items if the quantity is larger than 0 .
    else {
      tool.total = tool.count * tool.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.tools];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          tool: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setTools();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let carttotal = 0;
    this.state.cart.map(item => (carttotal += item.total));

    this.setState(() => {
      return {
        cartTotal: carttotal
      };
    });
  };
  render() {
    return (
      <ToolContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ToolContext.Provider>
    );
  }
}

class SoilProvider extends Component {
  state = {
    soils: [],
    detailSoils: detailSoils,
    cart: [],
    modalOpen: false,
    modalSoil: detailSoils,
    cartTotal: 0,
    deliveryCost: 0
  };

  componentDidMount() {
    //this.setProducts();
    fetch("/api/soils")
      .then(res => res.json())
      .then(soils =>
        this.setState({ soils }, () => console.log("soils:", soils))
      );

    console.log("did mount: ");
    console.log(this.state.soils);
  }

  setSoils = () => {
    let soils = [];
    storeSoils.forEach(item => {
      const singalItem = { ...item };
      soils = [...soils, singalItem];
    });
    this.setState(() => {
      return { soils };
    });
  };

  getItem = id => {
    const soil = this.state.soils.find(item => item.id === id);
    return soil;
  };

  handleDetail = id => {
    const soil = this.getItem(id);
    this.setState(() => {
      return { detailSoils: soil };
    });
  };

  addToCart = id => {
    let tempSoils = [...this.state.soils];

    // we need the index of the product to change its values
    const index = tempSoils.indexOf(this.getItem(id));
    const soil = tempSoils[index];

    // changing the values in our data.js
    soil.inCart = true;
    soil.count = 1;
    const price = soil.price;
    soil.total = price;
    this.setState(
      () => {
        return { soils: tempSoils, cart: [...this.state.cart, soil] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // cart modal Pop-up methods
  openModal = id => {
    const soil = this.getItem(id);

    this.setState(() => {
      return { modalSoil: soil, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // cart page methods

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedItem);
    const soil = tempCart[index];

    soil.count = soil.count + 1;
    soil.total = soil.count * soil.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedItem);

    const soil = tempCart[index];

    soil.count = soil.count - 1;

    // to remove the item form the cart if the quantity is 0
    if (soil.count === 0) {
      this.removeItem(id);
    }
    // to show the total price of the remaining items if the quantity is larger than 0 .
    else {
      soil.total = soil.count * soil.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.soils];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          soil: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setSoils();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let carttotal = 0;
    this.state.cart.map(item => (carttotal += item.total));

    this.setState(() => {
      return {
        cartTotal: carttotal
      };
    });
  };
  render() {
    return (
      <SoilContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </SoilContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
const ToolConsumer = ToolContext.Consumer;
const SoilConsumer = SoilContext.Consumer;

export {
  ProductProvider,
  ProductConsumer,
  ToolProvider,
  ToolConsumer,
  SoilConsumer,
  SoilProvider
};
