import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <Link to={"/"} className={`${styles.linkText} `}>
          Home
        </Link>

        <Link to={"/feed"} className={`${styles.linkText} `}>
          Feed
        </Link>

        <Link to={"/profile"} className={`${styles.linkText} `}>
          Profile
        </Link>
        {/* <Link to="/">Home</Link> */}
        {/* <p>Home</p>
        <p>Home</p>
        <p>Home</p> */}
      </div>
    </div>
  );
};
export default Sidebar;
