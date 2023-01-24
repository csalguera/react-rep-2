import Track from "./Track"

const Album = (props) => {
  return (
    <>
      <h1>Album {props.albumNum}</h1>
      <div>
        <Track trackNum={1}/>
      </div>
      <div>
        <Track trackNum={2}/>
      </div>
    </>
  )
}

export default Album