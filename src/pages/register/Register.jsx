import "./register.scss"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>Social-lad</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti voluptatem et adipisci quidem magnam tenetur, dignissimos eos nisi.</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form >
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Address"/>
                <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
