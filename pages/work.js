import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Work() {

  return (
    <div className="bg-nude-100 h-full lg:min-h-screen p-0 lg:w-full">
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200">

        <div>
          <Link href="/"><h1 className="text-white font-default italic m-4 text-3xl lg:text-5xl">Tiffany Chan</h1></Link>
        </div>
        <div className="text-white flex justify-center mt-7 lg:mt-7 lg:mr-6 font-default italic text-xl">
          <Link href="/"><a className="mr-2 lg:mr-9 hover:text-nude-500">Home</a></Link>
          <Link href="/about"><a className="mr-2 lg:mr-9 hover:text-nude-500">About</a></Link>
          <Link href="/contact"><a className="mr-4 lg:mr-12 hover:text-nude-500">Contact</a></Link>
        </div>

      </div>

      <main className="container mx-auto p-8">

        <h1 className="text-nude-400 font-default italic text-5xl lg:text-6xl mb-20 md:-ml-10 text-center">Work & Projects</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <img
              src="/VibesCheck1.png"
              alt="Vibe Check Landing Page"
              className="w-full lg:h-56 " />
          </div>
          <div>
            <img
              src="/VibesCheck2.png"
              alt="Vibe Check Song Info"
              className="w-full lg:h-56" />
          </div>
          <div>
            <img
              src="/VibesCheck3.png"
              alt="Vibe Check Add New Song"
              className="w-full lg:h-56" />
          </div>

        </div>

        <div className="text-center">
          <Link href="https://github.com/tiffchannn/vibesCheck">
            <h1 className="font-default italic text-4xl mt-8 mb-4 leading-6 hover:text-nude-300">Vibes Check</h1>
          </Link>
          <p className="font-default text-base font-thin italic">Python - Django - Bootstrap</p>
          <p className="font-default text-base font-thin mt-0 my-0 mb-20">Music curation application | Playlist creation</p>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <img
              src="/Hiya_Dashboard.png"
              alt="Hiya Dashboard"
              className="w-full lg:h-56" />
          </div>
          <div>
            <img
              src="/Hiya_PostDetail.png"
              alt="Hiya Post Detail Page"
              className="w-full lg:h-56" />
          </div>
          <div>
            <img
              src="/Hiya_PostUpdate.png"
              alt="Hiya Update a Post"
              className="w-full lg:h-56" />
          </div>
        </div>

        <div className="text-center">
          <Link href="https://github.com/mkshin1/HIYA">
            <h1 className="font-default italic text-4xl mt-8 mb-4 leading-6 hover:text-nude-300">Hiya!</h1>
          </Link>
          <p className="font-default text-base font-thin italic">React - MongooseDB - Material UI</p>
          <p className="font-default text-base font-thin mb-40">Social media platform | Meme sharing</p>
        </div>

      </main>


    </div>

  )
}