import React from 'react'
import LoadingImg from "./loading.gif";



function Loading() {
  return (

	<div className='vh-100 d-flex align-items-center justify-content-center'>
	<img src={LoadingImg} alt=""/>
  </div>
  )
}

export default Loading