import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useState } from "react";

const CreateCar = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

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
        alert("Succesfully added!!");
      })
      .catch((err) => console.log(err));
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
                <div className="previewImage">
                  <img src={preview} alt="uploaded-img" />
                </div>
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
    </section>
  );
};

export default CreateCar;
