import React from "react"
import Cart from "./cart";

import Navbar from "./navbar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: "https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 1,
          img: "",

          id: 2,
        },
        {
          price: 999,
          title: "cooker",
          qty: 1,
          img: "",
          id: 3,
        },
        {
          price: 999,
          title: "cycliner",
          qty: 1,
          img: "",
          id: 4,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("Hey Please inc the qty of ", product);

    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteQuantity = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); //this give id whose id is not equal to this id

    this.setState({
      products: items,
    });
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />

        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
        />

        <div>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}







export default App;