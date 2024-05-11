import styles from './Projects.module.css'
import Link from 'next/link'

export default function ProjectsList(){
    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.Job1}>
                </div>
                <div className={styles.projectText1}>
                    <Link href="https://github.com/KaneAldrich121/ChessEngine2" className={styles.projectText1}>Chess Engine</Link>
                </div>
                <div className={styles.Job2}>
                </div>
                <div className={styles.projectText2}>
                    <Link href="https://github.com/KaneAldrich121/Financial_Calculations" className={styles.projectText2}>Tax/Mortgage Calculator</Link>
                </div>
                <div className={styles.Job3}>
                </div>
                <div className={styles.projectText3}>
                    <Link href="https://github.com/KaneAldrich121/LibraryHelper" className={styles.projectText3}>Library Helper</Link>
                </div>
            </div>
        </>
    )
}