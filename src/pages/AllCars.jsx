// Icons
import { FaTrash, FaEdit } from "react-icons/fa";

// Router
import { Link } from "react-router-dom";

const AllCars = () => {
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
              <tr>
                <td>1</td>
                <td className="carImg">
                  <img src="" alt="carImg" />
                </td>
                <td>Name</td>
                <td>Details</td>
                <td>$0.00</td>
                <td className="edit">
                  <Link to="/edit-car">
                    <FaEdit />
                  </Link>
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
