import { NavLink } from 'react-router-dom';
import styles from "./Shared.module.css"
import PropTypes from "prop-types";

export function Shared({ children }) {
  return (
    <>
      <header className={styles.bar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={styles.title} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.title} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
}

Shared.propTypes = {
    children: PropTypes.object.isRequired,
  };