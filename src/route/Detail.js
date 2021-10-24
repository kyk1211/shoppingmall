/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import './Detail.scss';
import { Nav } from 'react-bootstrap';
import Stock from '../components/Stock';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';


const Box = styled.div`
  padding-top: 30px;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${ props => props.color };
`;

function Detail({ goods }) {
  const [inputValue, setInputValue] = useState('');
  const [tab, setTab] = useState(0);
  const [tabAni, setTabAni] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

  const findGoods = goods.find(item => item.id == id)

  function handleClick() {
    if (!findGoods.quan) {
      alert('sold out');
    } else {
      dispatch({type: 'ADD', payload: { id: findGoods.id, name: findGoods.title, quan : 1 }})
      alert('장바구니에 추가되었습니다.')
    }
  }

  return (
    <div className="container">
      <Box>
        <Title className="black">Detail</Title>
        {/* <Title color="red">Detail</Title> */}
      </Box>
      <p>{ inputValue }</p>
      <input onChange={(e) => {setInputValue(e.target.value)}}/>
      {findGoods.quan ? null : (<div className="my-alert2">
        <p>sold out</p>
      </div>)}

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(findGoods.id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findGoods.title}</h4>
          <p>{findGoods.content}</p>
          <p>{findGoods.price}원</p>
          <Stock quan={ findGoods.quan } />
          <button className="btn btn-danger" onClick={handleClick}>주문하기</button> 
          <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {setTabAni(false); setTab(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {setTabAni(false); setTab(1)}}>Option</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={tabAni} classNames="wow" timeout={500}>
        <TabContent tab={tab} setTabAni={setTabAni}/>
      </CSSTransition>
    
    </div> 
  )
}

function TabContent({ tab, setTabAni }) {
  useEffect(() => {
    setTabAni(true);
  })
  switch(tab) {
    case 0:
      return <div>000</div>
    case 1:
      return <div>1111</div>
    default:
      console.log('default')
  }
}

// function mapStateToProps(state) {
//   return {
//     state: state.goodsReducer
//   }
// }

export default Detail