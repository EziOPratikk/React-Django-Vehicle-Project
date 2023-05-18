import classes from "./VehicleItem.module.css";
import Card from "./Card";

function VehicleItem(props) {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.content}>
          <img
            src={`http://localhost:8000${props.vimg}`}
            alt=""
            className={classes.image}
          />
          <div className={classes.info}>
            <p>
              <strong>NAME:</strong> {props.vname}
            </p>
            <p>
              <strong>VIN</strong>: {props.vin}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default VehicleItem;
