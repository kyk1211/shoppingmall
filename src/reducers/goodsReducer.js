/* eslint-disable */
const initialState = [
  { id : 1, name : "멋진신발2", quan : 1},
  { id : 2, name : "멋진신발3", quan : 100}
];

const goodsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      let copy = [...state]
      copy.map(item => {
        if (item.id === action.payload) {
          item.quan++
        }
      })
      return copy
    case 'DECREMENT':
      const copy2 = [...state]
      copy2.map(item => {
        if (item.id === action.payload) {
          if (item.quan) {
            item.quan--;
          }
        }
      })
      return copy2
    case 'ADD':
      const copy3 = [...state]
      if (copy3.find(item => item.id == action.payload.id)) {
        copy3.map(item => {
          if (item.id == action.payload.id) {
            item.quan = item.quan + action.payload.quan
          }
        })
      } else {
        copy3.push(action.payload)
      }
      return copy3
    default:
      return state
  }
};

export default goodsReducer