import classes from "./LoginRegister.module.css"
import { useRef, useState } from "react"
import { Link } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({
      email: "", 
      password: ""
    })

    const inputHandler = (e) => {
      e.preventDefault()
      setUser({
        ...user, 
        [e.target.name] : e.target.value
      })
    }

    const submitHandler = (e) => {
      e.preventDefault()
      console.log(user)
    }

    return (
        <div className={classes.auth}>
          <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input  
                type="email" 
                id="email"
                name="email"
                value={user.email}
                onChange={(event) => {
                  inputHandler(event);
                }}/>
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                value={user.password}
                onChange={(event) => {
                  inputHandler(event);
                }}
              />
            </div>
            <button type="submit" className={classes.btn}>Login</button>
            <Link to="/register" style={{color: "white", margin: "20px 0"}}>
              Don't have account? Register</Link>
            </form>
        </div>
    )
}

export default Login;