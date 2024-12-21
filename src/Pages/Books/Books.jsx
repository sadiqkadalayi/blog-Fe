import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards'
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function Books() {

     const [data, setData]=useState([]);
      const navigate = useNavigate(); 
    
      useEffect(()=>{ 
       getData()
      },[])
    
      const getData=()=>{
        const token = localStorage.getItem('token') 
        // axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/getData`,{headers:{"Authorization" : "Bearer" + " "+ token}}).then((res)=>{
          AxiosInstance.get(`/users/getData`).then((res)=>{
          
          setData(res.data)
    
        }).catch((err)=>{
          console.log(err);
          if(err.status=401){
            localStorage.removeItem('token')
            localStorage.clear()  // local storage ulla ella item um remove aayi pookum
            navigate('/login')
          }
          
        })
      }

  return (
    <div className='container mt-3'>  
    <div className='row'>
    <div className='d-flex flex-wrap gap-3'> {data.map(item=> <Cards book={item} key={item._id}/>)}</div>
    </div>
    </div>
  )
}

export default Books