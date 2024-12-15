import React from "react";
import { Navigate, Outlet} from 'react-router-dom'


export function Auth(){
    const token = localStorage.getItem('token')
    return (token ? <Outlet/> : <Navigate to ='/login'/>)
}

export function AvoidLogin(){
    const token = localStorage.getItem('token')
    return (token ? <Navigate to ='/'/>: <Outlet/> )
}

