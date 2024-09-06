import Image from "next/image";
import styles from "./page.module.css";
import ChildA from "./ChildA";

export default function Home() {
  return (
    <div className={styles.page}>
      <ChildA />
    </div>
  );
}
