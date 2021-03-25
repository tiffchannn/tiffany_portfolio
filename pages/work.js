import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Work() {
  // // When the user scrolls the page, execute myFunction
  // window.onscroll = function() {myFunction()};

  // // Get the header
  // var header = document.getElementById("myHeader");

  // // Get the offset position of the navbar
  // var sticky = header.scrollTop;

  // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      <div className={styles.navbar} id={styles.main_navbar}>
        <div>
          <Link href="/"><h1 className={styles.fullname}>Tiffany Chan</h1></Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>

      <main className={styles.work_content}>
        <div className={styles.work_block}>
          <img src="/VibesCheck1.png" alt="Vibe Check Landing Page" className={styles.work_img} />
          <img src="/VibesCheck2.png" alt="Vibe Check Song Info" className={styles.work_img} />
          <img src="/VibesCheck3.png" alt="Vibe Check Add New Song" className={styles.work_img} />
        </div>

          <Link href="https://github.com/tiffchannn/vibesCheck"><h1 className={styles.project_name}>Vibes Check</h1></Link>
          <p className={styles.technology}>Python - Django - Bootstrap</p>
          <p className={styles.text}>Music curation application | Playlist creation</p>

        <br></br>
        <br></br>
        <br></br>

        <div className={styles.work_block2}>
          <img src="/Hiya_Dashboard.png" alt="Hiya Dashboard" className={styles.work_img} />
          <img src="/Hiya_PostDetail.png" alt="Hiya Post Detail Page" className={styles.work_img} />
          <img src="/Hiya_PostUpdate.png" alt="Hiya Update a Post" className={styles.work_img} />
        </div>
        <Link href="https://github.com/mkshin1/HIYA"><h1 className={styles.project_name}>Hiya!</h1></Link>
        <p className={styles.technology}>React - MongooseDB - Material UI</p>
        <p className={styles.text}>Social media platform | Meme sharing</p>

      </main>


    </div>

  )
}