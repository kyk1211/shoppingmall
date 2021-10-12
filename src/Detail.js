/* eslint-disable */
import React from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';

let box = styled.div`
  padding : 20px;
`;

export default function Detail({ goods }) {

  const { id } = useParams();
  const history = useHistory();
  const findGoods = goods.find(item => item.id == id)

  return (
    <div className="container">
      <box>asdfa</box>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(goods[id].id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findGoods.title}</h4>
          <p>{findGoods.content}</p>
          <p>{findGoods.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}