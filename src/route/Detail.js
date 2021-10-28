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
  const [localData, setLocalData] = useState([]);
  const dispatch = useDispatch();
  
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('looked'))
    if (data == null) {
      data = []
    }
    if (data.includes(id)) {
      data.splice(data.indexOf(id), 1)
    }
    data.unshift(id)
    data = new Set(data)
    data = [...data]
    while (data.length >= 5) {
      data.shift()
    }
    
    localStorage.setItem('looked', JSON.stringify(data))
    setLocalData(JSON.parse(localStorage.getItem('looked')))
  }, [])

  const findGoods = goods.find(item => item.id == id)
  
  function handleClick() {
    if (!findGoods.quan) {
      alert('sold out');
    } else {
      dispatch({type: 'ADD', payload: { id: findGoods.id, name: findGoods.title, quan : 1, price: findGoods.price }})
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
        <div className="col-md-5">
          <img src={"https://codingapple1.github.io/shop/shoes"+(findGoods.id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-5 mt-4">
          <h4 className="pt-5">{findGoods.title}</h4>
          <p>{findGoods.content}</p>
          <p>{findGoods.price}원</p>
          <Stock quan={ findGoods.quan } />
          <button className="btn btn-danger" onClick={handleClick}>주문하기</button> 
          <button className="btn btn-danger" onClick={() => {history.goBack()}}>뒤로가기</button> 
        </div>
        <div className="col-md-2 mt-4 lookedList">
          <p>최근 본 상품</p>
          {localData.map((item,idx) => (
            <p key={idx}>{item}</p>
          ))}
          <button className="btn btn-primary del-btn" onClick={() => {
            localStorage.removeItem('looked')
            setLocalData([])
            alert('기록을 지웠습니다.')}}>기록 지우기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {setTabAni(false); setTab(0)}}>제품 설명</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {setTabAni(false); setTab(1)}}>Q&A</Nav.Link>
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
      return <div>제품설명</div>
    case 1:
      return <div>q&a</div>
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