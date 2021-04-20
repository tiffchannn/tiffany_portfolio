import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div className="bg-nude-100 h-full lg:min-h-screen p-0 w-min lg:w-full">
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      {/* NAV BAR */}
      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200">
        <div>
          <h1 className="text-white font-default italic m-4 text-5xl">Tiffany Chan</h1>
        </div>
        <div className="text-white flex justify-center mt-7 mr-6  font-default italic text-xl">
          <Link href="/about"><a className="text-white mr-9 hover:text-nude-500">About</a></Link>
          <Link href="/work"><a className="text-white mr-9 hover:text-nude-500">Work</a></Link>
          <Link href="/contact"><a className="text-white mr-12 hover:text-nude-500">Contact</a></Link>
        </div>
      </div>

      {/* HEADLINE */}
      <main className="flex flex-col justify-center items-center h-full pt-40 pb-96 lg:pb-20 px-10">
        <div className="lg:h-72 w-full">
          <h1 className="font-default italic m-0 text-6xl text-center">
            Hey there, I'm Tiffany.
          </h1>

          <p className="font-default text-lg text-center leading-6">
            I'm a full-stack developer, but also dog-mom, music-lover, weight-lifter, food-inhaler. I have a diverse skill set, ranging from HTML + CSS + Javascript, all the way to Python and Java.
          </p>
        </div>


        {/* PROJECT / WORK SECTION */}
        <div className="flex flex-row mt-32 lg:mt-40">
          <div className="mx-24 w-64 text-center">
            <Link href="/work"><h2 className="font-default italic text-5xl mb-4 leading-6 hover:text-nude-300">Vibes Check</h2></Link>
            <a href="https://github.com/tiffchannn/vibesCheck" className="font-default text-lg hover:text-white">Github</a>
          </div>

          <div className="mx-24 w-64 text-center">
            <Link href="/work"><h2 className="font-default italic text-5xl mb-4 leading-6 hover:text-nude-300">Hiya!</h2></Link>
            <a href="https://github.com/mkshin1/HIYA" className="font-default text-lg hover:text-white">Github</a>
          </div>

        </div>

        <br></br>
        <br></br>
        <br></br>

        {/* CONTACT */}
        <div className="flex flex-row mt-48 items-center">
          <h3 className="font-default italic text-3xl hover:text-nude-500">
            <a href="mailto:tiffany.yi.chan@gmail.com">Don't be a stranger, let's chat!</a></h3>
          <img src="/paper_plane.png" alt="Email logo" className="h-10 m-2.5"/>
        </div>

        <div className="flex text-center">
            <p className="font-default text-base px-8">
              <a href="mailto:tiffany.yi.chan@gmail.com">
                Email
              </a>
            </p>
            <p className="font-default text-base px-8">
              <a href="https://www.linkedin.com/in/tiffanyyichan/">
                LinkedIn
              </a>
            </p>
            <p className="font-default text-base px-8">
              <a href="TiffanyChan_Resume.pdf">
                Resume
              </a>
            </p>
        </div>


      </main>
    </div>
  )
}
