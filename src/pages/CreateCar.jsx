import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCar = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const notify = () => toast("Succesfully added!!");

  const imageOnChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    }
  };

  const createSchema = object({
    name: string(),
    details: string(),
    price: string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createSchema) });

  const onSubmit = async (data) => {
    const body = new FormData();
    body.append("name", data.name);
    body.append("details", data.details);
    body.append("price", data.price);
    body.append("productImage", image);

    await axios
      .post(process.env.REACT_APP_CREATE_PRODUCT, body)
      .then((res) => {
        reset();
        setImage(null);
        notify();
      })
      .catch((err) => console.warn(err));
  };


  return (
    <section className="createCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Add new car</h2>
          <div className="login-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="user-box">
                <input type="text" name="name" {...register("name")} />
                <label>Car Name</label>
              </div>
              {/* {errors.name && <span>{errors.name.message}</span>} */}
              <div className="user-box">
                <input type="text" name="details" {...register("details")} />
                <label>Car Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" {...register("price")} />
                <label>Car Price</label>
              </div>
              <div className="user-box">
                <input
                  type="file"
                  name="productImage"
                  id="cImg"
                  onChange={imageOnChange}
                />
                {
                  image &&
                  <div className="previewImage">
                    <img src={preview} alt="uploaded-img" />
                  </div>
                }
              </div>
              <div className="btn">
                <button>
                  Create Car
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default CreateCar;