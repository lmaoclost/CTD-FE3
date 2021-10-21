import './style.css';

const Outros = () => {

  return (
    <section id="outros">
      <div className="grid">
        <div className="grid-item">
          <div className="image-container">
            <img src="https://criticalhits.com.br/wp-content/uploads/2020/10/Ft-Slots.jpg" alt="Caça Niquel" />
          </div>
          <h3>Caça Niquel</h3>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="https://www.goapostas.com/wp-content/uploads/2020/03/apostar-agora-roleta-cassino-1024x640.jpeg" alt="Roleta" />
          </div>
          <h3>Roleta</h3>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="https://diariodorio.com/wp-content/uploads/2020/07/457828-PFCW93-901-scaled.jpg" alt="Poker" />
          </div>
          <h3>Poker</h3>
        </div>
      </div>
    </section>
  )
}

export default Outros;