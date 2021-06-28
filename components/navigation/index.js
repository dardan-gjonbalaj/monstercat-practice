import { FaSearch, FaMusic, FaSignInAlt } from "react-icons/fa";
import cn from "classnames";

import styles from "./styles.module.scss";

const Navigation = (props) => {
  return (
    props.opened && (
      <div className={styles.navigation}>
        <div className={styles["close"]} onClick={props.toggleNavigation}>
          X
        </div>

        <div className={styles["link"]}>
          <input
            className={cn(styles["link-text"], styles.search)}
            type="input"
            placeholder="SEARCH"
          />
          <span className={styles["link-icon"]}>
            <FaSearch />
          </span>
        </div>

        <a href="/" className={styles["link"]}>
          <span className={styles["link-text"]}>
            <span className={styles["link-icon"]}>
              <FaMusic />
            </span>
            Player
          </span>
        </a>

        <a href="/" className={styles["link"]}>
          <span className={styles["link-text"]}>
            <span className={styles["link-icon"]}>
              <FaSignInAlt />
            </span>
            Sign In
          </span>
        </a>

        <a href="/" className={styles["link"]}>
          <span className={styles["link-text"]}>Music</span>
        </a>

        <a href="/" className={styles["link"]}>
          <span className={styles["link-text"]}>Artists </span>
        </a>
      </div>
    )
  );
};

export default Navigation;
