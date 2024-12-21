import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';
import './LoginBox.css'

function LoginBox() {
  const [loginData, setloginData] = useState({});
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    // axios({
    //   url:"http://localhost:8080/users/login",
    //   method:"post",
    //   data:loginData

    AxiosInstance({
      url: "/users/login",
      method: "post",
      data: loginData
    }).then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("sample", "sample token")
      navigate('/')
      console.log(res);

    }).catch((err) => {
      console.log(err);

    })
  };


  const handleChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='container-fluid bg-danger'>
        <div className='row'>
          <div className='d-flex align-items-center justify-content-center col-main'>

            <div className='col-md-4 p-5 border rounded'>
              <div className="login-container">

                <h2 className='mb-3 text-light'>Login</h2>
                <div className="form-group text-light">
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="form-group text-light">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>

              </div>
              <div className='mt-5 text-light'>
                <p>if yor are not register an account ! Please go through the <Link className='link-to' to={'/signup'}><u>Sign Up </u></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox