import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.linkText} ${styles.activeLink}`
              : `${styles.linkText}`
          }
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            isActive
              ? `${styles.linkText} ${styles.activeLink}`
              : `${styles.linkText}`
          }
        >
          {" "}
          Feed
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? `${styles.linkText} ${styles.activeLink}`
              : `${styles.linkText}`
          }
        >
          {" "}
          Profile
        </NavLink>
        {/* <Link to="/">Home</Link> */}
        {/* <p>Home</p>
        <p>Home</p>
        <p>Home</p> */}
      </div>
    </div>
  );
};
export default Sidebar;
