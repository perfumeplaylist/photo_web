import React from "react";
import styles from "./Wrap.module.css";

export default function Wrap({ children }) {
  return <main className={styles.wrap}>{children}</main>;
}
