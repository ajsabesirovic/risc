import classes from "./LoginRegister.module.css"
import { useRef } from "react"

const Register = () => {
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    return (
        <section className={classes.auth}>
          <form>
            <h1>Register</h1>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input ref={emailRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="username">Your Username</label>
              <input ref={usernameRef} type="username" id="username" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input type="password" ref={passwordRef} id="password" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="confirmPassword" ref={confirmPasswordRef} id="confirmPassword" required />
            </div>
            </form>
        </section>
    )
            }

export default Register;