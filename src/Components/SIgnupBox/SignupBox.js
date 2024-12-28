
import './signUp.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';


function SignupBox() {
  const [signupData, setSignupData] = useState({});


  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log(signupData);

  // },[signupData])
  const handleSignUp = (event) => {
    if(signupData.password !== signupData.cnfPassword){
      alert('The passwords you entered do not match. We apologize. Verify your password, please.')
    }else{
      AxiosInstance.post('/users/signup', signupData).then((res) => { 
        if(res.status === 200){
          alert(res.data);
          navigate('/login')
        }
 
      }).catch((err) => {
        console.log(err);
        if(err.status === 400){
          alert(err.response.data);
          navigate('/signup')
        }
        
  
      })
    }
    
  };
  const handleChange = (e) => {
    
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
    
  }
  return (

    <>
      <div className='container-fluid bg-danger'>
        <div className='row'>
          <div className='d-flex align-items-center justify-content-center col-main text-light'>
            <div className='col-md-4 p-5 border rounded'>
              <div className="login-container">
                <h2>Sign Up</h2>
                <div className="form-group">
                  <label htmlFor="name">full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={signupData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">mob</label>
                  <input
                    type="text"
                    name='mob'
                    className="form-control"
                    value={signupData.mob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">email</label>
                  <input
                    type="email"
                    name='email'
                    className="form-control"
                    value={signupData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={signupData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"> Confirm Password</label>
                  <input
                    type="password"
                    name="cnfPassword"
                    className="form-control"
                    value={signupData.cnfPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3" onClick={handleSignUp}>Login</button>
              </div>
              <div className='mt-5 text-light'>
              <p>if yor are already create an account . Please go through <Link className='link-to' to={'/login'}><u>Login </u></Link></p>
           </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupBox