import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData]=useState([]);
  const navigate = useNavigate(); 
  useEffect(()=>{ 
    const token = localStorage.getItem('token') 
    axios.get("http://localhost:8080/users/getData",{headers:{"Authorization" : "Bearer" + " "+ token}}).then((res)=>{
      
      setData(res.data)

    }).catch((err)=>{
      console.log(err);
      if(err.status=401){
        localStorage.removeItem('token')
        localStorage.clear()  // local storage ulla ella item um remove aayi pookum
        navigate('/login')
      }
      
    })
  },[])
  return (
    <div className='d-flex flex-wrap gap-3'> {data.map(item=> <Cards book={item} key={item._id}/>)}</div>
  )
}

export default Home