import Ixora from "../components/ixora";
import NextIT from "../components/nextit";
import Onair from "../components/onair";
import styles from "./home.module.css"; // Create this CSS file

export default function Home() {
  return (    
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitle}>Career</div>
      <Ixora />
      <div className={styles.sectionDivider} />
      <NextIT />
      <div className={styles.sectionDivider} />
      <Onair />
    </div>
  );
}