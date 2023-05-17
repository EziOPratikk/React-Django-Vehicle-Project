import { useState } from "react";

import classes from "./AddVehicle.module.css";
import MainNavigation from "../components/layout/MainNavigation";

function AddVehicle() {
  const [vehicleName, setVehicleName] = useState("");
  const [vin, setVin] = useState("");

  const [selectedImage, setSelectedImage] = useState();

  function vehicleNameHandler(e) {
    setVehicleName(e.target.value);
  }

  function vinHandler(e) {
    setVin(e.target.value);
  }

  function imageHandler(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(vehicleName);
    console.log(vin);
    console.log(selectedImage);
  }

  return (
    <>
      <MainNavigation />
      <div className={classes.formContainer}>
        <h2 style={{ fontWeight: "bold", marginBottom: "15px" }}>
          Provide Vehicle details below
        </h2>
        <form className={classes.vehicleForm} onSubmit={submitHandler}>
          <label htmlFor="vname">Vehicle Name</label>
          <input
            type="text"
            id="vname"
            value={vehicleName}
            onChange={vehicleNameHandler}
          />
          <label htmlFor="vin">Vehicle Identification Number (VIN) </label>
          <input type="text" id="vin" value={vin} onChange={vinHandler} />
          <label htmlFor="vimg">Vehicle Image</label>
          <input
            type="file"
            id="vimg"
            name="image"
            accept=".jpg, .jpeg, .png"
            onChange={imageHandler}
          />
          {selectedImage && (
            <div className={classes.imgDiv}>
              <img
                className={classes.uploadedImg}
                src={URL.createObjectURL(selectedImage)}
                alt="A Vehicle"
              />
            </div>
          )}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddVehicle;
