import Album from "./Album"

const Artist = (props) => {
  return (
    <>
      <h1>Artist {props.artistNum}</h1>
      <div>
        <Album albumNum={1}/>
      </div>
      <div>
        <Album albumNum={2}/>
      </div>
    </>
  )
}

export default Artist