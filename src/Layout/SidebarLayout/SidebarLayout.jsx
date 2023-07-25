import styles from "./SidebarLayout.module.scss";
import PropTypes from "prop-types";

import Sidebar from "../../components/Sidebar/Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <div className={`${styles.sidebarLayout} globalContainer`}>
      <Sidebar />
      <div className={styles.sidebarLayoutChildren}>{children}</div>
    </div>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;
