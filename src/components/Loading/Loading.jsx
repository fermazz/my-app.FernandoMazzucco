import React from 'react'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Loading.css"

const Loading = () => {
  return (
    <div className="container-spinner">
        <Spinner animation="border" variant="dark" className='spinner'/>
    </div>
  )
}

export default Loading
