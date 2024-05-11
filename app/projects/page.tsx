import styles from './page.module.css'
import ProjectsList from '../components/projects/Projects'


export default function ProjectsPage(){
    return (
        <>
            <div className={styles.mainContent}>
                <h1>My Projects:</h1>
                <ProjectsList />
            </div>
        </>
    )
}