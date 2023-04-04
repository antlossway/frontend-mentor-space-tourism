import { useGlobalContext } from "../context"

const TechNavbar = () => {
  const {data, globalTech, setGlobalTech} = useGlobalContext()

  const techs = data.technology.map((item) => item.name.toLowerCase())


  return (
    <ul role="list" className="circle-indicators flex">
        {
            techs.map((tech, index) => (
                <li key={tech}
                  onClick={() => setGlobalTech(tech)}
                  aria-selected={ tech === globalTech? "true": "false"}
                  // tabIndex="0"
                  ><span className="fs-500 ff-serif">{index + 1}</span><span className="sr-only">{tech}</span>
                </li>
            ))
        }
    </ul>

  )
}

export default TechNavbar