import Image from "next/image"

const Listings = ({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <div className="listing-container">
      <article className="sm:flex max-w-[1100px] py-8 my-5 sm:m-auto justify-between items-center px-[40px] bg-[var(--background)] shadow-xl shadow-[var(--dark-cyan-shadow)] rounded border-l-8 border-transparent hover:border-[var(--dark-cyan)] relative">
        <section className="sm:flex justify-start sm:gap-[25px]">
          <section>
            <Image
              src={logo}
              alt="/"
              height={90}
              width={90}
              className="absolute sm:relative w-[3.75rem] sm:w-full top-[-2rem] sm:top-0 left-[2.2rem] sm:left-0"
            />
          </section>

          <section>
            <div className="flex-col space-y-1">
              <div className="flex items-center gap-[20px] bold">
                <span className="blue pt-2 sm:pt-0">{company}</span>
                {isNew ? (
                  <span className="uppercase bg-[var(--dark-cyan)] rounded-2xl text-[var(--background)] px-3 pt-[.4rem] pb-[.2rem]">
                    {" "}
                    New!
                  </span>
                ) : (
                  ""
                )}
                {featured ? (
                  <span className="uppercase bg-[var(--very-dark-grayish-cyan)] rounded-2xl text-[var(--background)] px-3 pt-[.4rem] pb-[.2rem]">
                    Featured
                  </span>
                ) : (
                  ""
                )}
              </div>

              <p className="bold text-xl cursor-pointer hover:text-[var(--dark-cyan)]">
                {position}
              </p>

              <ul className="flex gap-[10px] gray">
                <li className="pr-[20px]">{postedAt}</li>
                <li className="list-disc pl-[7px] pr-[20px]">{contract}</li>
                <li className="list-disc pl-[5px] ">{location}</li>
              </ul>
            </div>
          </section>
        </section>

        <div className="border border-gray-300 mt-5"></div>

        <section>
          <ul className="flex flex-wrap items-center gap-[20px] blue sm:p-4 px-0 pt-4">
            <li className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer hover:bg-[var(--dark-cyan)] hover:text-[var(--filter-tablets)]">
              {role}
            </li>

            <li className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer hover:bg-[var(--dark-cyan)] hover:text-[var(--filter-tablets)]">
              {level}
            </li>

            {tools.map((tool) => (
              <li
                key={tool}
                className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer hover:bg-[var(--dark-cyan)] hover:text-[var(--filter-tablets)]"
              >
                {tool}
              </li>
            ))}

            {languages.map((language) => (
              <li
                key={language}
                className="bg-[var(--filter-tablets)] rounded p-2 cursor-pointer hover:bg-[var(--dark-cyan)] hover:text-[var(--filter-tablets)]"
              >
                {language}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}

export default Listings
