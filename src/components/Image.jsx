import {useGlobalContext} from "../context"

const Image = ({type}) => {
  const {data,globalDest, globalCrew, globalTech, isDesktop} = useGlobalContext()

  let info = {}
  switch(type) {
    case "dest":
      info = data.destinations.filter( (item) => item.name.toLowerCase() === globalDest)[0]
      break;
    case "crew":
      info = data.crew.filter( (item) => item.name.toLowerCase() === globalCrew)[0]
      break;
    case "tech":
      info = data.technology.filter( (item) => item.name.toLowerCase() === globalTech)[0]
      break;
  }

  // const planetInfo = data.destinations.filter( (item) => item.name.toLowerCase() === globalDest)[0]

  const imgTitle = info.name
  let imgSrc = ""
  let imgSrc2 = ""

  if (type === "tech")
  {
    imgSrc = info.images.landscape

    if (isDesktop) {
      imgSrc = imgSrc.replace("landscape", "portrait")
    }

    return (
      <picture>
        <img className="image" src={imgSrc} alt={imgTitle} />
      </picture>
    )

  } else {
    imgSrc = info.images.png
    imgSrc2 = info.images.webp

    return (
      <picture>
        <source srcset={imgSrc2} type="image/webp"></source>
        <img className="image" src={imgSrc} alt={imgTitle} />
      </picture>
    )
  }

  // console.log(`imgSrc: ${imgSrc}, imgTitle: ${imgTitle}`)

}

export default Image