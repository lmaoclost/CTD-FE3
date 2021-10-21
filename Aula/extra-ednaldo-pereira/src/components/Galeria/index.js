import Video from '../Video';
import './style.css';

const Galeria = () => {

  return (
    <section id="videos">
      <div className="grid">
        <Video url='https://www.youtube.com/embed/EtrodNQKZ8I' title='Vale nada vale tudo - Ednaldo Pereira' />
        <Video url='https://www.youtube.com/embed/HjGp2aJ_EMA' title='Banido Desbanido - Ednaldo Pereira' />
        <Video url='https://www.youtube.com/embed/7vJxLu8yNMY' title='What is the Brother 2 - Ednaldo Pereira' />
      </div>
    </section>
  )
}

export default Galeria;