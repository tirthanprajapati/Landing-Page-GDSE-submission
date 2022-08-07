import styles from '../styles/Home.module.css'
import Link from 'next/link'
function nav()
{
    return(
        <nav>
        <ul className={styles.navbarr}>
            <li className={styles.cad}>
                <Link href="/">Home</Link>
            </li>
            <li className={styles.cad}>
                <Link  href="/practice">Practice</Link>
            </li>
            <li className={styles.cad}>
                <Link  href="/compete">Complete</Link>
            </li>
            <li className={styles.cad}>
                <Link  href="/learn">Learn</Link>
            </li>
            <li >
                |
            </li>
            <li className={styles.cad}>
                <Link  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Discuss</Link>
            </li>
        </ul>
        </nav>
    )
}
export default nav