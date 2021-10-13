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

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
