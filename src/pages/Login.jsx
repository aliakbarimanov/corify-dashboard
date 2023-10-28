// import Link
import {Link} from "react-router-dom";

// import useForm
import {useForm} from "react-hook-form";

// import object, string
import {object, string} from "yup";

// import yupResolver
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2>Login Page</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="email" name="email" {...register("email")}/>
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" {...register("password")}/>
                <label>Password</label>
              </div>
              <div>
                <button>
                  Login
                  <span></span>
                </button>
              </div>
            </form>
            <Link to="/registration">Registration</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
