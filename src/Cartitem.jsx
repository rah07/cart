import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();

    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }

  increaseQuantity = () => {
    // this.state.qty +=1;
    // console.log("this state", this.state);

    // // set state form 1
    // this.setState({

    //     qty: this.state.qty + 1
    // })

    // set state form 1
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty + 1,
        };
      },
      () => {
        console.log("this.state", this.state);
      }
    );
  };

  decreaseQuantity = () => {
    if (this.state.qty > 0) {
      this.setState((prevState) => {
        return {
          qty: prevState.qty - 1,
        };
      });
    }
  };

  render() {
    const { price, title, qty } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />{" "}
        </div>{" "}
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>{" "}
          <div style={{ color: "grey" }}> Rs {price} </div>{" "}
          <div style={{ color: "grey" }}> Qty: {qty} </div>{" "}
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increaseQuantity}
            />{" "}
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />{" "}
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "lightblue",
  },
};

export default CartItem;
