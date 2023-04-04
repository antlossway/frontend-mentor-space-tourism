import {Link} from "react-router-dom"

const Navbar = ({activeItem}) => {
  const toggleMenu = () => {
    const menu = document.querySelector(".primary-navigation")
    const navToggle = document.querySelector(".mobile-nav-toggle")

    // const visible = menu.getAttribute("data-visible")
    const visible = menu.dataset.visible

    if (visible === "false") {
        // menu.setAttribute("data-visible", true)
        menu.dataset.visible = "true"

        // toggle the background-image
        // method 1: css .mobile-nav-toggle[aria-expanded="true"]
        navToggle.setAttribute("aria-expanded", true)
        // method 2: set directly here
        // navToggle.style.backgroundImage = "url(/assets/shared/icon-close.svg)"
    } else {
        // menu.setAttribute("data-visible", false)
        menu.dataset.visible = "false"
        navToggle.setAttribute("aria-expanded", false)
    }
  }

  return (
    <header className="header flex">
        <Link to="/">
            <img className="logo"
                src="/assets/shared/logo.svg"
            />
        </Link>

        <button
            className="mobile-nav-toggle"                         aria-controls="primary-navigation"
            onClick={toggleMenu} >
            <span className="sr-only" aria-expanded="false">Menu</span>
        </button>

        <nav className="nav">
            <ul id="primary-navigation"
                data-visible="false"
                className="primary-navigation underline-indicators flex
                ff-sans-cond text-white uppercase letter-spacing-2"
            >
              <li className={activeItem === "home" ? "active":""}>
                <Link to="/">
                        <span aria-hidden="true">00</span>Home
                </Link>
             </li>

             <li className={activeItem === "dest" ? "active":""}>
                <Link to="/destination" style={{textDecoration: "none"}}>
                        <span aria-hidden="true">01</span>Destination
                </Link>
             </li>

             <li className={activeItem === "crew" ? "active":""}>
                <Link to="/crew" style={{textDecoration: "none"}}>
                        <span aria-hidden="true">02</span>Crew
                </Link>
             </li>

             <li className={activeItem === "tech" ? "active":""}>
                <Link to="/technology" style={{textDecoration: "none"}}>
                        <span aria-hidden="true">03</span>Technology
                </Link>
             </li>

            </ul>
        </nav>
    </header>
  )
}

export default Navbar