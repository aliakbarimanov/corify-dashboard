// import useState
import { useState } from "react";

// import useForm
import { useForm } from "react-hook-form";

// import object, string
import { object, string } from "yup";

// import yupResolver
import { yupResolver } from "@hookform/resolvers/yup";

const Registartion = () => {
  const registerSchema = object({
    name: string()
      .required("Adinizi daxil etmediniz.")
      .trim("Adinizi daxil etmediniz."),
    surname: string()
      .required("Soyadinizi daxil etmediniz.")
      .trim("Soyadinizi daxil etmediniz."),
    email: string()
      .required("Emailinizi daxil etmediniz.")
      .trim("Emailinizi daxil etmediniz.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email-i duzgun formatda daxil etmediniz."
      ),
    password: string()
      .required("Parolu daxil etmediniz.")
      .trim("Parolu daxil etmediniz.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Parol min 8, en az bir reqem, en az bir boyuk, bir balaca herf olamlidir."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2>Registration Page</h2>
          <div className="login-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={errors.name ? "user-box error" : "user-box"}>
                <input type="text" name="name" {...register("name")} />
                <label>Name</label>
                {errors.name && <span className="errorMsg">{errors.name.message}</span>}
              </div>
              <div className={errors.surname ? "user-box error" : "user-box"}>
                <input type="text" name="surname" {...register("surname")} />
                <label>Surname</label>
                {errors.surname && <span className="errorMsg">{errors.surname.message}</span>}
              </div>
              <div className={errors.email ? "user-box error" : "user-box"}>
                <input type="email" name="email" {...register("email")} />
                <label>Email</label>
                {errors.email && <span className="errorMsg">{errors.email.message}</span>}
              </div>
              <div className={errors.password ? "user-box error" : "user-box"}>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                <label>Password</label>
                {errors.password && <span className="errorMsg">{errors.password.message}</span>}
              </div>
              <div>
                <button>
                  Register
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registartion;
