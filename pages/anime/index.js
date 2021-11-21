import Head from 'next/head'
import styles from '../../styles/Anime.module.css'
import Footer from '../../components/footer'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('https://api.jikan.moe/v3/top/anime');
  const data = await res.json();

  return {
    props: { anime: data }
  }
}

export default function Anime({ anime }) {
  return (
    <div>
      <Head>
        <title>Next Anime | Anime</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/NextAnimeLogo.png" />
      </Head>

      <main>
        <Link href="/">
          <button>Back to home!</button>
        </Link>
        <div className={styles.container}>
          {anime.top.map(res =>
            <div className={styles.animeCard} key={res.mal_id}>
              <img src={res.image_url} className={styles.animeImage}></img>
              <div className={styles.animeTitle}>
                {res.title.length > 25 ? res.title.substring(0, 25) + '...' : res.title}
              </div>
              <div>
                No of Episodes: {res.episodes}
              </div>
            </div>)}
        </div>
      </main>
      <div>
        {anime.top.map(res => console.log)}
      </div>
      <Footer />
    </div >
  )
}
