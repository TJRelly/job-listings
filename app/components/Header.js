import Image from "next/image"
import mobileBg from "/public/images/bg-header-mobile.svg"
import desktopBg from "/public/images/bg-header-desktop.svg"

const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header
