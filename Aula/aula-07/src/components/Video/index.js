import './style.scss';

const Video = ({ url, children }) => {

  return (
    <>
      <iframe src={url} title={children} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>{children}</h3>
    </>
  )
}

export default Video;