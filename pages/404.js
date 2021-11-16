import Link from 'next/link'
import styles from '../styles/404.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NoPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>This page cannot be found</h1>
      <h2 className={styles.text}>Head back to the homepage <Link href='/'><a className={styles.innerText}>here</a></Link></h2>
      <h2 className={styles.text}>You will be redirected back in <span className={styles.innerText}>{10}</span> seconds</h2>
    </div>
  );
}

export default NoPage;