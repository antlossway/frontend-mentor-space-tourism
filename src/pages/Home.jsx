import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="page-container home-container">
        <a className="skip-to-content" href="#main">Skip to content</a>

        <Navbar activeItem="home"/>

        <main id="main" className="grid-container grid-container--home">
          <div>
            <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to <span className="display-block fs-900 ff-serif text-white">Space</span></h1>

            <p className="text-accent">
            Let’s face it; if you want to go to space, you might as well genuinely go to
  outer space and not hover kind of on the edge of it. Well sit back, and relax
  because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className="right">
            {/* <a href="#" className="large-button uppercase ff-serif text-dark bg-white">Explore</a> */}
            <Link to="/destination" className="large-button uppercase ff-serif text-dark bg-white">Explore</Link>
          </div>

        </main>
  </div>
  )
}

export default Home