import DestContent from "../components/DestContent"
import DestNavbar from "../components/DestNavbar"
import Image from "../components/Image"
import Navbar from "../components/Navbar"


const Destination = () => {


  return (
    <div className="page-container dest-container">
      <Navbar activeItem="dest"/>

      <main id="main" className="grid-container grid-container--dest flow">
            <h1 class="numbered-title"><span aria-hidden="true">01</span> PICK YOUR DESTINATION</h1>

            <Image type="dest"/>

            <DestNavbar />
            <DestContent />

        </main>
    </div>
  )
}

export default Destination