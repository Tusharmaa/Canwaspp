import React from "react";
import "./Order.css";
import moment from "moment";
import PaymentProduct from "./PaymentProduct";
import Currency from "./Currency";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order-Time">
        <h2>Order on: </h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      </div>
      <p className="orderId">
        <small>
          <span>Order ID:</span> {order.id}
        </small>
      </p>
      <Currency value={order.data.amount / 100} hideCurrency />
      {order.data.cart?.map((item) => (
        <PaymentProduct
          priceIndia={item.priceIndia}
          priceNotIndia={item.priceNotIndia}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
      <hr />
      <br />
    </div>
  );
}

export default Order;
