/* eslint-disable */
const initialState = [
  { orderNum: 1, id : 100, name : "멋진신발2", quan : 1},
  { orderNum: 2, id : 200, name : "멋진신발3", quan : 100}
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
      copy2.map((item,i) => {
        if (item.id === action.payload) {
          switch (item.quan) {
            case 1:
              copy2.splice(i,1)
              copy2.forEach((item,i) => item.orderNum = i+1)
              break;
            default:
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
            item.quan += action.payload.quan
          }
        })
      } else {
        const data = action.payload
        data.orderNum = copy3.length ? copy3[copy3.length-1].orderNum + 1 : 0
        copy3.push(data)
      }
      return copy3
    case 'BUY':
      return [];
    default:
      return state
  }
};

export default goodsReducer