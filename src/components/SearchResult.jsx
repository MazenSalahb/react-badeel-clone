/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./SearchResult.module.css";
import { motion, useAnimationControls } from "framer-motion";

function SearchResult({ result, searchActive }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (searchActive) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        y: 30,
      });
    }
  }, [controls, searchActive]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={controls}
      className={styles.searchResult}
    >
      {result.map((pro) => (
        <div key={pro.id} className={styles.proContainer}>
          <div>{pro.arTitle}</div>
        </div>
      ))}
    </motion.div>
  );
}

export default SearchResult;
