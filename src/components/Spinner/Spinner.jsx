import { ThreeCircles } from "react-loader-spinner";
import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <ThreeCircles
        height="250"
        width="250"
        color="#b0e0e6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};