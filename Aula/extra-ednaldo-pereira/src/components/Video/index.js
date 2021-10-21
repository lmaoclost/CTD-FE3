import './style.css';

const Video = ({url, title}) => {

  return (
    <div className="grid-item">
      <iframe src={url} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>{title}</h3>
    </div>
  )
}

export default Video;