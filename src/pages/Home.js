import { useState, useEffect } from "react";

import axios from "axios";
import MainNavigation from "../components/layout/MainNavigation";

import VehicleList from "../components/VehicleList";

function Home() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const vehicleListUrl = "http://localhost:8000/api/vehicle/";
    axios({
      method: "get",
      url: vehicleListUrl,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // console.log(response.data[0].images_urls);
      setVehicleData(response.data);
    });
  }, []);

  return (
    <div>
      <MainNavigation />
      {vehicleData.length === 0 ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>No Vehicles added yet!</p>
          <p>Click on Add Vehicle to get started {":)"}</p>
        </div>
      ) : (
        <VehicleList vehicles={vehicleData} />
      )}
    </div>
  );
}

export default Home;
