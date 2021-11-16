import Link from 'next/link'
import styles from '../styles/404.module.css'

const NoPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>This page cannot be found</h1>
      <h2 className={styles.text}>Head back to the homepage <Link href='/'><a className={styles.innerText}>here</a></Link></h2>
    </div>
  );
}

export default NoPage;