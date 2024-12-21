import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';


function Home() {



  return (
    <div className='container mt-3'>  
    <div className='row'>
    
    <div className='d-flex justify-content-center mt-5'>
      
    <h1 >Hello Welcome to our Web Application MERN Stack</h1>
    </div>
    {/* <div className='d-flex flex-wrap gap-3'> {data.map(item=> <Cards book={item} key={item._id}/>)}</div> */}
    </div>
    </div>
  )
}

export default Home