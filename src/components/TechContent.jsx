import {useGlobalContext} from "../context"

const TechContent = () => {
  const {data,globalTech} = useGlobalContext()
  const techInfo = data.technology.filter( (item) => item.name.toLowerCase() === globalTech)[0]

  return (
    <article className="tech-info flow">
      <header className="flow flow--space-small">
        <h2 className="fs-400 ff-serif uppercase text-accent">The Terminology ...</h2>
        <p className="fs-700 ff-serif uppercase">{techInfo.name}</p>
      </header>
      <p className="text-accent">{techInfo.description}</p>

    </article>
  )
}

export default TechContent