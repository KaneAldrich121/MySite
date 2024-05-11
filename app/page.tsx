import styles from "./page.module.css";
import './globals.css';
import My_Picture from "./components/picture/picture";
import Bio from "./components/bio/bio";
import Lst from "./components/lst_information/lst_info";
import Experience from "./components/experience/experience";

export default function Home() {
  return (
    <>
      <div className={styles.pageContent}>
        <div className={styles.grid_container}>
          <div className={styles.BioLSTBlock}>
            <div className={styles.myBio}>
              <Bio />
            </div>
            <div className={styles.LST}>
              <Lst />
            </div>
          </div>
          <div className={styles.myPicture}>
            <My_Picture />
          </div>
          <div className={styles.Experience}>
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
