import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Contact() {
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
          <Link href="/about"><a>About</a></Link>
          <Link href="/work"><a>Work</a></Link>
        </div>
      </div>

      <div className={styles.contact_div}>

        <h1 className={styles.about_name}>Want to talk for real? Reach out, let's chat!</h1>

        <div className={styles.contacts}>
          <p className={styles.contact_info_text}><a href="mailto:tiffany.yi.chan@gmail.com">Email</a></p>

          <p className={styles.contact_info_text}><a href="https://www.linkedin.com/in/tiffanyyichan/">LinkedIn</a></p>

          <p className={styles.contact_info_text}>Resume</p>
        </div>


      </div>

    </div>

  )
}