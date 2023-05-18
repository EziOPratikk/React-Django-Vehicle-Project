import VehicleItem from "./VehicleItem";
import classes from "./VehicleList.module.css";

function VehicleList(props) {
  return (
    <div className={classes.container}>
      <h1 style={{ textAlign: "center" }}>Your Vehicles</h1>
      <section className={classes.content}>
        {props.vehicles.map((e) => {
          return <VehicleItem vimg={e.images_urls[0]} vname={e.name} vin={e.vin} />;
        })}
      </section>
    </div>
  );
}

export default VehicleList;
