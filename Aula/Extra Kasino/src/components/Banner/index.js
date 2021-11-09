import './style.scss';

const Banner = ({ children }) => {

  return (
    <section id="banner">
      <div className="banner-text">
        {children}
      </div>

      {/* <iframe src="https://www.youtube.com/embed/LCDaw0QmQQc?autoplay=1&mute=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="autoplay=1;" allowfullscreen></iframe> */}
    </section>
  )
}

export default Banner;