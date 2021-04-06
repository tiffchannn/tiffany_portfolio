import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div className="bg-nude-100 h-full lg:min-h-screen p-0 w-min lg:w-full">
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      {/* <div className={styles.navbar}> */}
      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200">
        <div>
          {/* <h1 className={styles.fullname}>Tiffany Chan</h1> */}
          <h1 className="text-white font-default italic m-4 text-5xl">Tiffany Chan</h1>
        </div>
        {/* <div className={styles.nav_links}> */}
        <div className="text-white flex justify-center mt-7 mr-6  font-default italic text-xl">
          <Link href="/about"><a className="mr-9 hover:text-nude-500">About</a></Link>
          <Link href="/work"><a className="mr-9 hover:text-nude-500">Work</a></Link>
          <Link href="/contact"><a className="mr-12 hover:text-nude-500">Contact</a></Link>
        </div>
      </div>

      {/* <main className={styles.main}> */}
      <main className="flex flex-col justify-center items-center h-full pt-40 pb-96 lg:pb-20 px-10">

        {/* INTRO SECTION */}
        {/* <div className={styles.top_section}> */}
        <div className="lg:h-72 w-full">
          {/* <h1 className={styles.title}> */}
          <h1 className="font-default italic m-0 text-6xl text-center">
            Hey there, I'm Tiffany.
          </h1>

          {/* <p className={styles.description}> */}
          <p className="font-default text-lg text-center leading-6">
            I'm a full-stack developer, but also dog-mom, music-lover, weight-lifter, food-inhaler. I have a diverse skill set, ranging from HTML + CSS + Javascript, all the way to Python and Java.
          </p>
        </div>


        {/* PROJECT / WORK SECTION */}
        {/* <div className={styles.projects}> */}
        <div className="flex flex-row mt-32 lg:mt-40">
          {/* <div className={styles.project_section}> */}
          <div className="mx-24 w-64 text-center">
            {/* <Link href="/work"><h2 className={styles.project_name}>Vibes Check</h2></Link> */}
            <Link href="/work"><h2 className="font-default italic text-5xl mb-4 leading-6 hover:text-nude-300">Vibes Check</h2></Link>
            {/* <a href="https://github.com/tiffchannn/vibesCheck" className={styles.github_link}>Github</a> */}
            <a href="https://github.com/tiffchannn/vibesCheck" className="font-default text-lg hover:text-white">Github</a>
          </div>

          {/* <div className={styles.project_section}> */}
          <div className="mx-24 w-64 text-center">
            {/* <Link href="/work"><h2 className={styles.project_name}>Hiya!</h2></Link> */}
            <Link href="/work"><h2 className="font-default italic text-5xl mb-4 leading-6 hover:text-nude-300">Hiya!</h2></Link>
            {/* <a href="https://github.com/mkshin1/HIYA" className={styles.github_link}>Github</a> */}
            <a href="https://github.com/mkshin1/HIYA" className="font-default text-lg hover:text-white">Github</a>
          </div>

        </div>

        <br></br>
        <br></br>
        <br></br>

        {/* CONTACT */}
        {/* <div className={styles.contact}> */}
        <div className="flex flex-row mt-48 items-center">
          {/* <h3 className={styles.contact_text}>Don't be a stranger, shoot me a message!</h3> */}
          <h3 className="font-default italic text-3xl hover:text-nude-500">
            <a href="mailto:tiffany.yi.chan@gmail.com">Don't be a stranger, shoot me a message!</a></h3>
          <img src="/paper_plane.png" alt="Email logo" className="h-10 m-2.5"/>
        </div>
      </main>
    </div>
  )
}
