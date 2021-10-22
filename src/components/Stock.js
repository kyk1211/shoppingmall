import React from 'react';

export default function Stock({ quan }) {

  return (
    <>
      {quan == null ? <p>재고 : 0</p> : <p>재고 : { quan }</p>}
    </>
  )
}