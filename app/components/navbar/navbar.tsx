import Link from 'next/link'
import styles from './navbar.module.css'
import { useRouter } from 'next/router'


function NavBar() {
    return (
      <nav className={styles.NavBarClass}>
        <ul style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center', // Center the navigation items
          gap: '50px' // Adds 50 pixels between each item
        }}>
          <li><Link href="/" className = {styles.navItem}>Home</Link></li>
          <li><Link href="/projects" className = {styles.navItem}>My Projects</Link></li>
          <li><Link href="/Kane_Aldrich_Resume.pdf" className = {styles.navItem}>My Resume</Link></li>
        </ul>
      </nav>
    );
  }

  export default NavBar;