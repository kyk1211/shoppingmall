import React from "react";

export default function GoodsList({ goods }) {
  return (
    <div className="col-md-4">
      <img src={ "https://codingapple1.github.io/shop/shoes" + (goods.id + 1) + ".jpg" } alt="goods" width="100%"/>
      <h4>{ goods.title }</h4>
      <p>{ goods.content } & { goods.price }won</p>
    </div>
  )
}