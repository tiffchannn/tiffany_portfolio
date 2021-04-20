import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className="bg-nude-100 h-full lg:min-h-screen p-0 w-auto">
      <Head>
        <title>Tiffany Chan | Web Developer</title>
      </Head>

      <div className="flex sticky top-0 left-0 justify-between h-20 bg-nude-200  w-full">
        <div>
          <Link href="/"><h1 className="text-white font-default italic m-4 text-3xl lg:text-5xl">Tiffany Chan</h1></Link>
        </div>
        <div className="text-white flex justify-center mt-7 lg:mt-7 lg:mr-6 font-default italic text-xl">
          <Link href="/"><a className="text-white mr-2 lg:mr-9 hover:text-nude-500">Home</a></Link>
          <Link href="/work"><a className="text-white mr-2 lg:mr-9 hover:text-nude-500">Work</a></Link>
          <Link href="/contact"><a className="text-white mr-4 lg:mr-12 hover:text-nude-500">Contact</a></Link>
        </div>
      </div>

      <div className="flex flex-col p-4  lg:flex-row justify-center items-center mt-10 lg:mt-20 lg:mx-10">
        <img src="/selfie2.jpg" alt="Selfie" className="h-2/5 w-3/5 mb-4 lg:h-2/3 lg:w-4/12" />

        <div className="flex flex-col justify-center ml-4 lg:ml-12">
          <h3 className="font-default italic text-xl lg:text-4xl pb-1.5">
            Get to know a little about me ...
          </h3>
          <h4 className="font-default text-sm font-thin w-auto text-left lg:w-96 lg:pl-4">
            I'm a full-stack developer with a diverse skill set, ranging from HTML + CSS + Javascript, all the way to Python and Java. Prior to my coding journey, I obtained my Master's Degree in Industrial and Organizational Psychology and worked in Talent Acquisition and Test Development.
          </h4>

          <h4 className="font-default text-sm font-thin w-auto mt-4 text-left lg:w-96 lg:pl-4">
            When I'm not coding, you can find me weight-lifting, inhaling food, curating my music collection or out with my two fur babies - Gizmo and Ollie.
          </h4>
        </div>
      </div>

      <div className="flex flex-col align-center justify-start bg-nude-100 p-7 lg:mt-20 lg:mx-20 lg:pb-40">
        <h3 className="font-default italic text-xl  mt-5 lg:text-4xl lg:mx-11">
          How it all started ...
        </h3>

        <p className="font-default text-sm m-1 lg:mx-12 lg:mt-5">
          2020 was something none of us could have imagined or predicted. We were all forced to slow down a bit, reflect, evaluate and embrace our new normal with the lockdown due to Coronavirus. I saw this as the perfect opportunity to dive head first into something that was looming in the back of my mind for years. I was going to switch careers and attend a coding bootcamp. And yes, years. Yes, I also seriously considered going the bootcamp route even before I got my Master’s degree. My joy for coding dates way back to the early 2000’s, Xanga days. This was my first taste of HTML and CSS. I was intrigued and driven by how I could customize and tailor my personal page into whatever I wanted. My favorite tunes playing in the background? Oh yeah. Cursor with trailing stars? Uh-huh. Alert windows with a custom greeting message? Super cool. Fonts and colors galore! Back then, I didn’t think much about how fun I thought this was, let alone the idea that this could become a possible career, so I let that joy fizzle away. I explored other interests and focused on (lots) school instead. I went to Le Cordon Bleu for culinary school. I got my Bachelor’s degree in Sociology Administration and Marketing. I even got my Master’s degree in Industrial and Organizational Psychology. I did a lot. Fast forward to early 2020, I was recently unemployed and exhausted by the constant rejections of the job hunt. It was a sign, telling me that this was finally the time to act on my shelved-away teenage hobby.  I was going all-in, determined to become a Software Engineer.
          <br></br>
          <br></br>

          I’m going to be honest, I had this perception (like many others) that going the bootcamp route seemed like a backup plan or “easy” or “guaranteed” way of landing a steady-high paying job. I thought coding bootcamps were the kind of thing where as long as you have the money, you’re good to go. I thought going this route would be a walk in the park. Wow, was I wrong.
          <br></br>
          <br></br>

          I started off with teaching myself the basics of Javascript - taking online courses via Code Academy, Scrimba and Udemy. After getting my feet wet with the online self-teaching, I was ready to kick it up a notch. I started looking up various bootcamps and set my eyes on Hack Reactor. I knew friends who completed the program and were successful in the field, so I believed that I should follow in their footsteps and go the same route. Little did I know that there is a whole interview process for admission.
          <br></br>
          <br></br>

          I thought I was ready to interview, but my gut felt otherwise. So I wanted to be fully prepared and completed a bootcamp prep course through Hack Reactor.  I was so set on attending Hack Reactor, that it took me four (yes, FOUR) interview attempts before I was admitted into the program. As you can imagine, by this point my motivation levels were at an all time high, but my endurance was slowing down. I reminded myself that I worked hard to get in, I’m going to do fine in the program. I was also wrong then. Every day in the program was a struggle. They were not lying when they said that the amount of content you learn is like “drinking from a fire hose”. I was drowning. I was exhausted. I was crying almost everyday due to the level of imposter syndrome I was feeling. Everyone I talked to said this feeling was normal, that everyone was having a hard time. I believed them. I got tutoring, I put in extra hours to try and keep up. I thought once I got to that halfway mark, I’d feel better. At the midway point of the program, we had one final technical assessment that would determine whether or not we would move on to the senior phase of the immersive. Passing this exam would guarantee that I would complete the program. I was so close to the end, I felt some weight lift off my shoulders. The long awaited exam day came, and I was not ready but motivated. I needed to pass. All my eggs were in this basket. There was no backup plan if this all goes south. This bootcamp was my backup plan. I was in over my head. I had a panic attack during the exam. Test anxiety kicked in 100%. I was unable to complete the exam the way I hoped. I knew what was coming but didn’t want to believe it. In short, I was removed from the program. No retakes, no part-time option, no extra help to finish what I started. The past 6 weeks of my life came to a sudden and abrupt halt. Everything I worked so hard for over the past 4 months, felt like it was taken from me. Not only did I feel defeated, but my mental health had fallen to an all time low. The combination of dealing with the pandemic and struggling on this coding journey roller-coaster was hitting me hard. My self-inflicted pressure and expectations were physically affecting me, I knew I had to take a break.
          <br></br>
          <br></br>

          I took about a month off to reset, reevaluate, and take charge of my life again. I learned way too much to throw in the towel, so I made the conscious decision to tackle another bootcamp. I wasn’t kidding when I set out to become a Software Engineer. I knew attending another coding bootcamp that I was going to be more prepared and ready than I ever was before. I completed half a bootcamp prior, this was going to be my way of leveling up. Choosing Coding Dojo was the best and right decision for me. My time at Coding Dojo was everything I hoped for.  It was a manageable pace and I had the opportunity to learn not only more Javascript, but also Python and Java. My instructors and TA’s were great (shoutout to Sadie, Morley, Aric and Jim) , the curriculum was well done, and I also met some of the most amazing people. My cohort mates were the icing on the cake, having had this shared experience together is irreplaceable. Cohort fam for life. Not only did I make it through the program, I actually had fun. The spark I felt all those years ago came right back. And here I am  today, 1.5 bootcamps done. My mental health is better than ever, and I finally feel confident with where I’m at.
          <br></br>
          <br></br>
          <p className="text-xl italic">It can only go up from here, right?</p>

        </p>
      </div>

    </div>

  )
}