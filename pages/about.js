import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      <div className={styles.navbar}>
        <div>
          <Link href="/"><h1 className={styles.fullname}>Tiffany Chan</h1></Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/work"><a>Work</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>

      <div className={styles.content}>
        {/* <img src="/tiff.png" alt="Selfie" className={styles.selfie} /> */}
        <img src="/selfie2.jpg" alt="Selfie" className={styles.selfie} />

        <div className={styles.about_div}>
          <h3 className={styles.about_name}>Get to know a little about me ... </h3>
          <h4 className={styles.about_info}>I'm a full-stack developer with a diverse skill set, ranging from HTML + CSS + Javascript, all the way to Python and Java. Prior to my coding journey, I obtained my Master's Degree in Industrial and Organizational Psychology and worked in Talent Acquisition and Test Development.</h4>

          {/* <br></br> */}

          <h4 className={styles.about_info2}>When I'm not coding, you can find me weight-lifting, inhaling food, curating my music collection or out with my two fur babies - Gizmo and Ollie. </h4>
        </div>
      </div>

    </div>

  )
}