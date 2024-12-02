

import React, { useEffect, useState } from 'react'
import axios from 'axios';


function SignupBox() {
      const [signupData, setSignupData] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 
// useEffect(()=>{
//   console.log(signupData);
  
// },[signupData])
  const handleSignUp = (event) => {
    axios.post('http://localhost:8080/users/signup',signupData).then((res)=>{

    }).catch((err)=>{
      console.log(err);
      
    })
  };
  const handleChange=(e)=>{
    setSignupData({...signupData,[e.target.name]:e.target.value})
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="fullName">full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullname"
            className="form-control"
            value={signupData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">mob</label>
          <input
            type="number"
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
            type="text"
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
        <button type="submit" className="btn-primary" onClick={handleSignUp}>Login</button>
    </div>
  );
}

export default SignupBox