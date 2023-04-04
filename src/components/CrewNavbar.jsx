import { useGlobalContext } from "../context"

const CrewNavbar = () => {
  const {data, globalCrew, setGlobalCrew} = useGlobalContext()

  const crews = data.crew.map((item) => item.name.toLowerCase())

  return (
    <ul role="list" className="dot-indicators flex">
        {
            crews.map((crew) => (
                <li key={crew}
                  onClick={() => setGlobalCrew(crew)}
                  aria-selected={ crew === globalCrew? "true": "false"}
                  // tabIndex="0"
                  > <span className="sr-only">{crew.role}</span>
                </li>
            ))
        }
    </ul>

  )
}

export default CrewNavbar