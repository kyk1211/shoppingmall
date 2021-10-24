import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function Cart({ shoes, setShoes }) {

  const par = useSelector(state => state)
  const { goodsReducer, alertReducer } = par
  const dispatch = useDispatch()


  const handleClick = () => {
    const copy = [...shoes]
    goodsReducer.map(item => {
      copy.map(element => {
        if (element.id === item.id) {
          element.quan = element.quan - item.quan
        }
      })
    })
    setShoes(copy);
    dispatch({type: 'BUY'})
    alert('구매가 완료되었습니다.')
  }

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {goodsReducer.map((item, idx) => (
            <tr key={idx}>
              <td>{item.orderNum}</td>
              <td>{item.name}</td>
              <td>{item.quan}</td>
              <td>
                <button onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}>추가</button>
                <button onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}>빼기</button>
              </td>
            </tr>)
          )}
        </tbody>
      </Table>
      <button onClick={handleClick}>모두 구매</button>

      {alertReducer 
        ? (<div className="my-alert2">
          <p>warning</p>
          <button onClick={() => dispatch({ type: 'CLICK' })}>close</button>
        </div>) 
        : null}

    </div>
  )
}

// function mapStateToProps({ goodsReducer, alertReducer }) {
  
//   return {
//     state: goodsReducer,
//     alertState: alertReducer
//   }
// }

export default Cart
