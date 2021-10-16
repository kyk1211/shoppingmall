import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
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
          {props.state.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quan}</td>
              <td>
                <button onClick={() => props.dispatch({type: 'INCREMENT', id: item.id})}>추가</button>
                <button onClick={() => props.dispatch({type: 'DECREMENT', id: item.id})}>빼기</button>
              </td>
            </tr>)
          )}
        </tbody>
      </Table>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Cart)
