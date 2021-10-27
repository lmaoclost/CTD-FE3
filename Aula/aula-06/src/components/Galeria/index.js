import Video from '../Video'
import './style.css';

const Galeria = () => {

  return(
    <section id="galeria">
      <div className="grid">
        <Video url="https://medal.tv/clip/2Mqmi2BBV7EJ3/vpTnDq89Js" title="4k Play" />
        <Video url="https://www.youtube.com/embed/bAhYH_mYhDg" title="Aulão Belky"/>
        <Video url="https://www.youtube.com/embed/rvrEEAT-tGo" title="A pior melhor jogada da vida!" />
      </div>
    </section>
  )
}

export default Galeria