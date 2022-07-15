import classes from "./LoginRegister.module.css"
import { useRef } from "react"
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    return (
        <section className={classes.auth}>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input ref={emailRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input type="password" ref={passwordRef} id="password" required />
            </div>
            </form>
        </section>
    )
            }

export default Login;