import styles from "./lst_info.module.css"

export default function Lst(){
    return (
        <>
            <div className={styles.grid_container}>
                <div className={styles.Languages}>
                    <h3>Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>C++</li>
                        <li>SQL</li>
                        <li>HTML/CSS/Javascript</li>
                    </ul>
                </div>
                <div className={styles.Skills}>
                    <h3>Skills</h3>
                    <ul>
                        <li>Leadership</li>
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>
                <div className={styles.Technologies}>
                    <h3>Technologies</h3>
                    <ul>
                        <li>Git</li>
                        <li>AWS</li>
                        <li>mySQL</li>
                    </ul>
                </div>
            </div>
        </>
    )
}