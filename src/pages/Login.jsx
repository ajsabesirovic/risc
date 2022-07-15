import classes from "./LoginRegister.module.css"
import { useRef } from "react"

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    return (
        <div className={classes.auth}>
          <form>
            <h1>Login</h1>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input ref={emailRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input type="password" ref={passwordRef} id="password" required />
            </div>
            </form>
        </div>
    )
            }

export default Login;