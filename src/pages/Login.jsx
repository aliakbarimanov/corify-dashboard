// import Link
import {Link} from "react-router-dom";

// import useForm
import {useForm} from "react-hook-form";

// import object, string
import {object, string} from "yup";

// import yupResolver
import { yupResolver } from "@hookform/resolvers/yup";

// import axios
import axios from "axios";

// import useContext, MainContext
import { useContext } from "react";
import { Context } from "../utils/MainContext";

const Login = () => {

  const {userIn, checkLogin} = useContext(Context);

  const loginSchema = object({
    email: string().trim().required("Email yazmadiniz"),
    password: string().trim().required("Parol yazmadiniz"),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    await axios.post( "http://localhost:8000/api/login", data)
      .then(res=>{
        localStorage.setItem("token", JSON.stringify(res.data.token));
        checkLogin();
      })
      .catch(err=>console.log(err))
  }

  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2>Login Page</h2>
          <div className="login-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="user-box">
                <input type="email" name="email" {...register("email")}/>
                <label>Email</label>
                {errors.email && <span className="errorMsg">{errors.email.message}</span>}
              </div>
              <div className="user-box">
                <input type="password" name="password" {...register("password")}/>
                <label>Password</label>
                {errors.password && <span className="errorMs">{errors.password.message}</span>}
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
