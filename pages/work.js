import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Work() {

  return (
    // <div className={styles.container}>
    <div className="bg-nude-100 min-h-screen p-0">
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      {/* <div className={styles.navbar}> */}
      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200">
        <div>
          {/* <Link href="/"><h1 className={styles.fullname}>Tiffany Chan</h1></Link> */}
          <Link href="/"><h1 className="text-white font-default italic m-4 text-5xl">Tiffany Chan</h1></Link>
        </div>
        {/* <div className={styles.nav_links}> */}
        <div className="text-white flex justify-center mt-7 mr-6  font-default italic text-xl">
          <Link href="/"><a className="mr-9 hover:text-nude-500">Home</a></Link>
          <Link href="/about"><a className="mr-9 hover:text-nude-500">About</a></Link>
          <Link href="/contact"><a className="mr-9 hover:text-nude-500">Contact</a></Link>
        </div>
      </div>

      {/* <main className={styles.work_content}> */}
      <main className="flex flex-col text-center justify-center align-center py-10 px-0 mt-8 pb-0">

        <h1 className="text-nude-400 font-default italic -mt-8 text-6xl mb-20">Work & Projects</h1>

        {/* <div className={styles.work_block}> */}
        <div className="flex flex-row justify-center mx-40 align-center mb-8">
          {/* <img
            src="/VibesCheck1.png"
            alt="Vibe Check Landing Page"
            className={styles.work_img} />
          */}
          <img
            src="/VibesCheck1.png"
            alt="Vibe Check Landing Page"
            className="w-5/12 ml-3 mr-3" />
          <img
            src="/VibesCheck2.png"
            alt="Vibe Check Song Info"
            className="w-5/12 mr-3" />
          <img
            src="/VibesCheck3.png"
            alt="Vibe Check Add New Song"
            className="w-5/12 mr-3" />
        </div>

        <Link href="https://github.com/tiffchannn/vibesCheck">
          {/* <h1 className={styles.project_name}>Vibes Check</h1> */}
          <h1 className="font-default italic text-5xl mb-4 leading-6 hover:text-nude-300">Vibes Check</h1>
        </Link>
        {/* <p className={styles.technology}>Python - Django - Bootstrap</p> */}
        <p className="font-default text-base font-thin italic">Python - Django - Bootstrap</p>
        {/* <p className={styles.text}>Music curation application | Playlist creation</p> */}
        <p className="font-default text-base font-thin mt-0 my-0 mb-20">Music curation application | Playlist creation</p>

        <br></br>
        <br></br>
        <br></br>

        {/* <div className={styles.work_block2}> */}
        <div className="flex flex-row justify-center mx-40 align-center mb-8">
          <img
            src="/Hiya_Dashboard.png"
            alt="Hiya Dashboard"
            className="w-5/12 ml-2 mr-1" />
          <img
            src="/Hiya_PostDetail.png"
            alt="Hiya Post Detail Page"
            className="w-5/12 ml-3 mr-1" />
          <img
            src="/Hiya_PostUpdate.png"
            alt="Hiya Update a Post"
            className="w-5/12 ml-3 mr-2" />
        </div>
        <Link href="https://github.com/mkshin1/HIYA">
          {/* <h1 className={styles.project_name}>Hiya!</h1> */}
          <h1 className="font-default italic text-5xl mb-4 leading-6 hover:text-nude-300">Hiya!</h1>
        </Link>
        {/* <p className={styles.technology}>React - MongooseDB - Material UI</p> */}
        <p className="font-default text-base font-thin italic">React - MongooseDB - Material UI</p>
        {/* <p className={styles.text}>Social media platform | Meme sharing</p> */}
        <p className="font-default text-base font-thin mb-40">Social media platform | Meme sharing</p>

      </main>


    </div>

  )
}