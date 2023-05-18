import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import carImage from "../../images/car.png";

function MainNavigation() {
  return (
    <nav className={classes.mainNav}>
      <div className={classes.logo}>
        <img src={carImage} alt="" className={classes.carImg}/>
      </div>

      <ul className={classes.menuLink}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add-vehicle">Add Vehicle</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
