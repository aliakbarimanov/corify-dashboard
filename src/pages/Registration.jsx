// import useState
import { useState } from "react";

import {useForm} from "react-hook-form";
import {object, string} from "yup";

const Registartion = () => {

    const registerSchema = object({
        name: string(),
        surname: string(),
        email: string(),
        password: string(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm();

    // const handleChange = (e) => {

    //     let inpName = e.target.name;
    //     let value = e.target.value;

    //     setNewUser({...newUser, [inpName]:value});
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     if(newUser.name===""){
    //         alert("Bos");
    //     }
    // }

    console.log(newUser);
    
    return (
        <section className="login">
            <div className="container">
                <div className="row">
                    <h2>Registration Page</h2>
                    <div className="login-box">
                        <form onSubmit={onSubmit}>
                            <div className="user-box">
                                <input type="text" name="name" onChange={handleChange} />
                                <label>Name</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="surname" onChange={handleChange} />
                                <label>Surname</label>
                            </div>
                            <div className="user-box">
                                <input type="email" name="email" onChange={handleChange} />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" onChange={handleChange} />
                                <label>Password</label>
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
    )
}

export default Registartion;