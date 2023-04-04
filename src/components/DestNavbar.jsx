import {useGlobalContext} from "../context"

const DestNavbar = () => {
  const {data, globalDest, setGlobalDest} = useGlobalContext()

  const planets = data.destinations.map((item) => item.name.toLowerCase())
  // console.log(planets)

  return (
    <ul role="list" className="tab-list underline-indicators flex ">
        {
          planets.map((planet) => (

            <li
              key={planet}
              onClick={() => setGlobalDest(planet)}
              // onKeyDown={() => setGlobalDest(planet)}
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              aria-selected={ planet === globalDest ? "true": "false"}
            >{planet}</li>

        ))
        }
    </ul>
  )
}

export default DestNavbar