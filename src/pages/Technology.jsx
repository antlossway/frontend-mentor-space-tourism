import Navbar from "../components/Navbar"
import TechNavbar from "../components/TechNavbar"
import TechContent from "../components/TechContent"
import Image from "../components/Image"


const Technology = () => {
  return (
    <div className="page-container tech-container">
      <Navbar activeItem="tech"/>

      <main className="grid-container grid-container--tech">
        <h1 className="numbered-title"><span aria-hidden="true">03</span> SPACE
        LAUNCH 101</h1>

        <Image type="tech"/>

        <TechNavbar />

        <TechContent />
      </main>
    </div>
  )
}

export default Technology