/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import './Detail.scss';
import Stock from './Stock';

const Box = styled.div`
  padding-top: 30px;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${ props => props.color };
`;

export default function Detail({ goods, stock, setStock }) {
  const [alert, setAlert] = useState(true);
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000)
    return () => {
      clearTimeout(timer);
    }
  }, []);
  
  const { id } = useParams();
  const history = useHistory();
  const findGoods = goods.find(item => item.id == id)

  return (
    <div className="container">
      <Box>
        <Title className="black">Detail</Title>
        {/* <Title color="red">Detail</Title> */}
      </Box>
      { inputValue }
      <input onChange={(e) => {setInputValue(e.target.value)}}/>

      {/* <div className="my-alert">
        <p>sold out</p>
      </div> */}
      {alert ? (<div className="my-alert2">
        <p>sold out</p>
      </div>) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(findGoods.id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findGoods.title}</h4>
          <p>{findGoods.content}</p>
          <p>{findGoods.price}원</p>
          <Stock stock={ stock[id] } />
          <button className="btn btn-danger" onClick={() => {
            let copyData = []
            stock.forEach((item, idx) => {
              if (idx == id) {
<<<<<<< HEAD
                if (item <= 0) {
                  window.alert('sold out');
                  copyData.push(0);
                } else {
                  copyData.push(item - 1)
                }
=======
                copyData.push(item - 1)
>>>>>>> 6ad0d43f1262a7953ebcf817f68cec3d0414f703
              } else {
                copyData.push(item)
              }
            })
<<<<<<< HEAD
            console.log(stock);
=======
>>>>>>> 6ad0d43f1262a7953ebcf817f68cec3d0414f703
            setStock(copyData);
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}