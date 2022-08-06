import styles from '../styles/Home.module.css'
function nav()
{
    return(
        <nav>
        <ul className={styles.navbarr}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/practice">Practice</a>
            </li>
            <li>
                <a href="/compete">Complete</a>
            </li>
            <li>
                <a href="/learn">Learn</a>
            </li>
            <li className={styles.cad}>
                |
            </li>
            <li>
                <a href="/discuss">Discuss</a>
            </li>
        </ul>
        </nav>
    )
}
export default nav