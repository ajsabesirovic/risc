import classes from "./LoginRegister.module.css"
import { useState } from "react"
import { Link } from "react-router-dom";


const Register = () => {
    const [user, setUser] = useState({
        email: "", 
        username: "",
        password: "",
        confirmPassword: ""
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
        <section className={classes.auth}>
          <form onSubmit={submitHandler}>
            <h1>Register</h1>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={user.email}
                onChange={(event) => {
                  inputHandler(event);
                }}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="username">Your Username</label>
              <input 
                type="username" 
                id="username"
                name="username"
                value={user.username}
                onChange={(event => {
                    inputHandler(event)
                })}
              />
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
            <div className={classes.control}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={(event) => {
                  inputHandler(event);
                }}/>
            </div>
            <button className={classes.btn}>Login</button>
            <Link to="/login" style={{color: "white", margin: "20px 0"}}>Already have account? Login</Link>
            </form>
        </section>
    )
            }

export default Register;