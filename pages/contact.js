import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className="bg-nude-100 min-h-screen p-0">
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      {/* NAV BAR */}
      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200">
        <div>
          <Link href="/">
            <h1 className="text-white font-default italic m-4 text-5xl">
              Tiffany Chan
            </h1>
          </Link>
        </div>
        <div className="text-white flex justify-center mt-7 mr-6  font-default italic text-xl">
          <Link href="/"><a className="mr-9 hover:text-nude-500">Home</a></Link>
          <Link href="/about"><a className="mr-9 hover:text-nude-500">About</a></Link>
          <Link href="/work"><a className="mr-12 hover:text-nude-500">Work</a></Link>
        </div>
      </div>

      <div className="mt-44 text-center">

        <div>
          <h1 className="font-default italic text-4xl">
            Want to talk for real? Reach out, let's chat!
          </h1>

          <div className="flex flex-row justify-center">
            <p className="font-default text-base p-5">
              <a href="mailto:tiffany.yi.chan@gmail.com">
                Email
              </a>
            </p>

            <p className="font-default text-base p-5">
              <a href="https://www.linkedin.com/in/tiffanyyichan/">
                LinkedIn
              </a>
            </p>

            <p className="font-default text-base p-5">
              <a href="TiffanyChan_Resume.pdf">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}