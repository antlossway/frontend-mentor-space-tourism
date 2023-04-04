import {useGlobalContext} from "../context"

const DestContent = () => {
  const {data,globalDest} = useGlobalContext()
  const planetInfo = data.destinations.filter( (item) => item.name.toLowerCase() === globalDest)[0]

  return (

          <article className="destination-info">
                <h2 className="fs-800 ff-serif uppercase">{planetInfo.name}</h2>

                <p className="text-accent">{planetInfo.description}</p>

                <div className="flex dest-meta">
                    <div className="left">
                        <h3 className="text-accent fs-200 uppercase ff-sans-cond letter-spacing-3 ">AVG.DISTANCE</h3>
                        <p className="fs-500 ff-serif uppercase">{planetInfo.distance}</p>
                    </div>
                    <div className="right">
                        <h3 className="text-accent fs-200 uppercase ff-sans-cond letter-spacing-3">EST.TRAVEL TIME</h3>
                        <p className="fs-500 ff-serif uppercase">{planetInfo.travel}</p>
                    </div>
                </div>

          </article>



  )
}

export default DestContent