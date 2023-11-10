import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCar = () => {

  const { id } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState("");

  const navigate = useNavigate();

  const notify = () => toast("Edited successfully !");

  useEffect(() => {
    getSingleData();
  }, [id]);

  const getSingleData = async () => {
    await axios
      .get(`${process.env.REACT_APP_SINGLE_PRODUCT}/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.warn(err));
  }

  const enterNewImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setNewImage(reader.result);
      }
    }
  }

  const editSchema = object({
    name: string(),
    details: string(),
    price: string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editSchema) });

  const onSubmit = async (data) => {

    const body = new FormData();
    body.append("name", data.name);
    body.append("details", data.details);
    body.append("price", data.price);
    body.append("productImage", image);

    await axios
      .put(`${process.env.REACT_APP_EDIT_PRODUCT}/${id}`, body)
      .then(res => {
        notify();
        navigate("/all-cars");
      })
      .catch(err => console.warn(err));
  }

  return (
    <section className="editCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Edit car's data</h2>
          <div className="login-box">
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="user-box">
                <input type="text" name="name" placeholder={data.name} {...register("name")} />
                <label>Car Name</label>
              </div>
              <div className="user-box">
                <input type="text" name="details" placeholder={data.details} {...register("details")} />
                <label>Car Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" placeholder={data.price} {...register("price")} />
                <label>Car Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" onChange={enterNewImage} />
                {
                  data.productImage && !newImage &&
                  (<div className="previewImage">
                    <img src={`${process.env.REACT_APP_IMAGE}/${data.productImage}`} alt="old-img" />
                  </div>)
                }
                {
                  newImage &&
                  (
                    <div className="previewImage">
                      <img src={newImage} alt="new-img" />
                    </div>
                  )
                }
              </div>
              <div className="btn">
                <button>
                  Edit car
                  <span></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default EditCar;
