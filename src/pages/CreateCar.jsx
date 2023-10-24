const CreateCar = () => {
  return (
    <section className="createCar">
      <div className="container">
        <div className="row">
          <h2 className="title">Add new car</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input
                  // className={errors.name && "error"}
                  type="text"
                  name="name"
                />
                <label>Car Name</label>
              </div>
              {/* {errors.name && <span>{errors.name.message}</span>} */}
              <div className="user-box">
                <input type="text" name="details" />
                <label>Car Details</label>
              </div>
              <div className="user-box">
                <input type="text" name="price" />
                <label>Car Price</label>
              </div>
              <div className="user-box">
                <input type="file" name="productImage" id="cImg" />
                {/* <div className="previewImage">
                  <img src={preview} alt="uploaded-img" />
                </div> */}
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
