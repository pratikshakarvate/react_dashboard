import React from 'react'
import "./Login.scss"
const Login = () => {
  return (
    <div className='main'>
        <div className="login-container">
            <form className="login-form" >
                <h1>Welcome Back</h1>
                <p>Please login to your account</p>
                <div className="input-group">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Login</button>
                <div className="bottom-text">
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                    <p><a href="#">Forgot password?</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
