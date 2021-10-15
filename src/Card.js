/* eslint-disable */
import React from "react";
import { useHistory } from "react-router";

export default function GoodsList({ goods }) {

  const history = useHistory();

  function handleClick() {
    history.push(`/detail/${goods.id}`)
  }

  return (
    <div className="col-md-4" onClick={handleClick}>
      <img src={ "https://codingapple1.github.io/shop/shoes" + (goods.id + 1) + ".jpg" } alt="goods" width="100%"/>
      <h4>{ goods.title }</h4>
      <p>{ goods.content }</p>
      <p>{ goods.price }원</p>
    </div>
  )
}