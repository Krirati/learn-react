import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
export default function TodoInput() {
  const dispatch = useDispatch()
  const onKeyUp = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value
      dispatch({ type: "ADD", payload: value });
      event.target.value = ""
    }
  }
  return <input onKeyUp={onKeyUp} />;
}