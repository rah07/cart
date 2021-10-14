import React from "react";
import CartItem from "./Cartitem";

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: "",
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

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteQuantity={this.handleDeleteQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
