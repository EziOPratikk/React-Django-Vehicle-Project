import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.mainNav}>
      <div className={classes.logo}>
        <h2>Home</h2>
      </div>
      <div className={classes.menuLink}>
        <ul>
          <li>
            <Link to="/add-vehicle">Add Vehicle</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
