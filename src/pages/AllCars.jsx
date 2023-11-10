// Icons
import { FaTrash, FaEdit } from "react-icons/fa";

// Router
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllCars = () => {
  const [data, setData] = useState([]);

  const notify = () => toast("Succesfully deleted!!");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    await axios
      .get(process.env.REACT_APP_ALL_PRODUCTS)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const deleteProduct = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_DELETE_PRODUCT}/${id}`)
      .then(res => {
        notify();
        getAllData(res.data);
      })
      .catch(err => console.warn(err));
  }


  return (
    <section className="allCars">
      {/* {loading && <Loader />} */}
      <div className="container">
        <div className="row">
          <h2 className="title">All Cars List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Car Image</th>
                <th>Car Name</th>
                <th>Car Details</th>
                <th>Car Price</th>
                <th>Edit Car</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="carImg">
                    <img src={`${process.env.REACT_APP_IMAGE}/${item.productImage}`} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                  <td>$ {item.price}</td>
                  <td className="edit">
                    <Link to={`/edit-car/${item.id}`}>
                      <FaEdit/>
                    </Link>
                    <FaTrash onClick={() => deleteProduct(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default AllCars;
