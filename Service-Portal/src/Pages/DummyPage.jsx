import React from 'react'
import { useSelector } from 'react-redux'

const DummyPage = () => {
    const data= useSelector(state=>state.userAcc);
  return (
    <div>
      <h1>{data.userName}</h1>
    </div>
  )
}

export default DummyPage
