import React from "react";
import { AppContext } from "../../services/AppContext";

export default function CartItem({ item, value, key }) {
  let total = (item.price - item.discountAmount) * item.cartquantity;
  // if (item.type === "pizza") {
  //   total = item.quantity * item.size.price;
  // } else {
  //   total = item.quantity * item.price;
  // }
  return (
    <AppContext.Consumer>
      {value => (
        <tr>
          <td> {item.name}</td>

          <td> {item.price}</td>

          <td>
            <div className="d-flex ">
              <button
                className="btn btn-dark mx-1"
                onClick={() => value.decrement(item)}
                disabled={item.cartquantity === 1}
              >
                -
              </button>
              <button className="btn btn-dark mx-1">
                {" "}
                {item.cartquantity}
              </button>
              <button
                className="btn btn-dark mx-1"
                onClick={() => value.increment(item)}
              >
                +
              </button>
            </div>
          </td>

          <td>$ {total}</td>

          <td className="cart-icon" onClick={() => value.removeItem(item._id)}>
            <i className="fas fa-trash" style={{ color: "yellow" }} />
          </td>
        </tr>
      )}
    </AppContext.Consumer>
  );
}
