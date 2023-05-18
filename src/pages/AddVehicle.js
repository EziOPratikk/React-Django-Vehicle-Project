import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import classes from "./AddVehicle.module.css";
import MainNavigation from "../components/layout/MainNavigation";

function AddVehicle() {
  const [vehicleName, setVehicleName] = useState("");
  const [vin, setVin] = useState("");

  const [selectedImage, setSelectedImage] = useState();

  const navigate = useNavigate(); 

  function vehicleNameHandler(e) {
    setVehicleName(e.target.value);
  }

  function vinHandler(e) {
    setVin(e.target.value);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function imageHandler(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      // console.log(base64)
      setSelectedImage(base64);
    }
  }

  // function imageHandler(e) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // }

  function submitHandler(e) {
    e.preventDefault();

    const addVehicleURl = "http://localhost:8000/api/vehicle/add/";

    const json = JSON.stringify({
      "name": vehicleName,
      "vin": vin,
      "images": [
        {
          image: selectedImage,
        },
      ],
    });

    axios({
      method: "post",
      url: addVehicleURl,
      headers: {
        "Content-Type": "application/json",
      },
      data: json,
    }).then((response) => {
      // console.log(response.data);
      navigate("/home");
    });
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
            required
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
            required
          />
          {selectedImage && (
            <div className={classes.imgDiv}>
              <img
                className={classes.uploadedImg}
                src={selectedImage}
                alt="A Vehicle"
                required
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
