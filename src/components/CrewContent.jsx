import {useGlobalContext} from "../context"

const CrewContent = () => {
  const {data,globalCrew} = useGlobalContext()
  const crewInfo = data.crew.filter( (item) => item.name.toLowerCase() === globalCrew)[0]

  return (
    <article className="crew-details flow">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase text-accent">{crewInfo.role}</h2>
        <p className="fs-700 ff-serif uppercase">{crewInfo.name}</p>
      </header>
      <p className="text-accent">{crewInfo.bio}</p>

    </article>
  )
}

export default CrewContent