import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiffany Chan | Web Developer</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className={styles.navbar}>
        <div>
          {/* <h1 className={styles.fullname}>Tiffany Chan</h1> */}
        </div>
        <div className={styles.nav_links}>
          <Link href="/about"><a>About</a></Link>
          <Link href="/work"><a>Work</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>

      <main className={styles.main}>

        {/* INTRO SECTION */}
        <div className={styles.top_section}>
          <h1 className={styles.title}>
            Hey there, I'm Tiffany.
          </h1>

          <p className={styles.description}>
            I'm a full-stack developer, but also dog-mom, music-lover, weight-lifter, food-inhaler. I have a diverse skill set, ranging from HTML + CSS + Javascript, all the way to Python and Java.
          </p>
        </div>


        {/* PROJECT / WORK SECTION */}
        <div className={styles.projects}>
          <div className={styles.project_section}>
            <Link href="/work"><h2 className={styles.project_name}>Vibes Check</h2></Link>
            <a href="https://github.com/tiffchannn/vibesCheck" className={styles.github_link}>Github</a>
          </div>

          <div className={styles.project_section}>
            <Link href="/work"><h2 className={styles.project_name}>Hiya!</h2></Link>
            <a href="https://github.com/mkshin1/HIYA" className={styles.github_link}>Github</a>
          </div>

        </div>

        <br></br>
        <br></br>
        <br></br>

        {/* CONTACT */}
        <div className={styles.contact}>
          <h3 className={styles.contact_text}>Don't be a stranger, shoot me a message!</h3>
          <a href="mailto:tiffany.yi.chan@gmail.com"><img src="/paper_plane.png" alt="Email logo" className={styles.plane}/></a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
