import CrewContent from "../components/CrewContent"
import CrewNavbar from "../components/CrewNavbar"
import Image from "../components/Image"
import Navbar from "../components/Navbar"

const Crew = () => {
  return (
    <div className="page-container crew-container">
      <Navbar activeItem="crew"/>

      <main className="grid-container grid-container--crew flow">
        <h1 className="numbered-title"><span aria-hidden="true">02</span> MEET YOUR CREW</h1>

        <CrewContent />

        <CrewNavbar />

        <Image type="crew"/>

      </main>

    </div>
  )
}

export default Crew