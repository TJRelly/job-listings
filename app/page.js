import Image from "next/image"
import mobileBg from "images/bg-header-mobile.svg"
import desktopBg from "images/bg-header-desktop.svg"
import photosnap from "images/photosnap.svg"

export default function Home() {
  return (
    <main>
      <Image
        src={mobileBg}
        alt="/"
        className="md:hidden w-full h-[155px] bg-[var(--dark-cyan)] mb-[75px]"
      />
      <Image
        src={desktopBg}
        alt="/"
        className="hidden md:block w-full h-[155px] bg-[var(--dark-cyan)] mb-[75px]"
      />
      {/* <!-- Item Start --> */}
      <div className="flex-col max-w-[1100px]  mx-auto">
        <div className="flex mb-[20px] justify-between items-center h-[160px] px-[40px] bg-[var(--background)] shadow-xl shadow-[var(--dark-cyan-shadow)] rounded border-l-8 border-transparent hover:border-[var(--dark-cyan)]">
          <div className="flex gap-[25px]">
            <Image
              src={photosnap}
              alt="/"
              height={90}
              width={90}
              className="m-auto"
            />
            <div className="flex-col space-y-1">
              <div className="flex items-center gap-[20px] bold">
                <span className="blue">Photosnap</span>
                <span className="uppercase bg-[var(--dark-cyan)] rounded-2xl text-[var(--background)] px-2 py-1">
                  New!
                </span>
                <span className="uppercase bg-[var(--very-dark-grayish-cyan)] rounded-2xl text-[var(--background)] px-2 py-1">
                  Featured
                </span>
              </div>
              <p className="bold text-xl cursor-pointer hover:text-[var(--dark-cyan)]">
                Senior Frontend Developer
              </p>
              <ul className="flex gap-[40px] gray">
                <li className="">1d ago</li>
                <li className="list-disc pl-[10px]">Full Time</li>
                <li className="list-disc pl-[10px]">USA only</li>
              </ul>
            </div>
          </div>

          <ul className="flex items-center gap-[20px] blue">
            {/* <!-- Role --> */}
            {/* <!-- Level --> */}
            <li className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer">
              Frontend
            </li>
            <li className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer">
              Senior
            </li>
            {/* <!-- Languages --> */}
            <li className="uppercase bg-[var(--filter-tablets)] rounded p-2 cursor-pointer">
              HTML
            </li>
            <li className="uppercase bg-[var(--filter-tablets)] rounded p-2 cursor-pointer">
              CSS
            </li>
            <li className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer">
              JavaScript
            </li>
          </ul>
        </div>
        <span></span>
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        Manage New! Featured Fullstack Developer 1d ago Part Time Remote
        {/* <!-- Role --> */}
        Fullstack
        {/* <!-- Level --> */}
        Midweight
        {/* <!-- Languages --> */}
        Python
        {/* <!-- Tools --> */}
        React
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        Account New! Junior Frontend Developer 2d ago Part Time USA only
        {/* <!-- Role --> */}
        Frontend
        {/* <!-- Level --> */}
        Junior
        {/* <!-- Languages --> */}
        JavaScript
        {/* <!-- Tools --> */}
        React Sass
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        MyHome Junior Frontend Developer 5d ago Contract USA only
        {/* <!-- Role --> */}
        Frontend
        {/* <!-- Level --> */}
        Junior
        {/* <!-- Languages --> */}
        CSS JavaScript
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        Loop Studios Software Engineer 1w ago Full Time Worldwide
        {/* <!-- Role --> */}
        Fullstack
        {/* <!-- Level --> */}
        Midweight
        {/* <!-- Languages --> */}
        JavaScript Ruby
        {/* <!-- Tools --> */}
        Sass
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        FaceIt Junior Backend Developer 2w ago Full Time UK only
        {/* <!-- Role --> */}
        Backend
        {/* <!-- Level --> */}
        Junior
        {/* <!-- Languages --> */}
        Ruby
        {/* <!-- Tools --> */}
        RoR
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        Shortly Junior Developer 2w ago Full Time Worldwide
        {/* <!-- Role --> */}
        Frontend
        {/* <!-- Level --> */}
        Junior
        {/* <!-- Languages --> */}
        HTML JavaScript
        {/* <!-- Tools --> */}
        Sass
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        Insure Junior Frontend Developer 2w ago Full Time USA only
        {/* <!-- Role --> */}
        Frontend
        {/* <!-- Level --> */}
        Junior
        {/* <!-- Languages --> */}
        JavaScript
        {/* <!-- Tools --> */}
        Vue Sass
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        Eyecam Co. Full Stack Engineer 3w ago Full Time Worldwide
        {/* <!-- Role --> */}
        Fullstack
        {/* <!-- Level --> */}
        Midweight
        {/* <!-- Languages --> */}
        JavaScript Python
        {/* <!-- Tools --> */}
        Django
        {/* <!-- Item End --> */}
        {/* <!-- Item Start --> */}
        The Air Filter Company Front-end Dev 1mo ago Part Time Worldwide
        {/* <!-- Role --> */}
        Frontend
        {/* <!-- Level --> */}
        Junior
        {/* <!-- Languages --> */}
        JavaScript
        {/* <!-- Tools --> */}
        React Sass
        {/* <!-- Item End --> */}
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://terrelljackson.vercel.app" target="_blank">
            TJ Jackson
          </a>
          .
        </div>
      </div>
    </main>
  )
}
