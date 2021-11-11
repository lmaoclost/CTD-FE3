import { Component } from 'react';
import './style.scss';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      movieList: []
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=f6541db294ac187416fae0f1b9effcce&language=pt-BR').then((response) => response.json()).then(({ results }) => {
      this.setState({
        movieList: results
      })
    });
  }

  componentDidUpdate() {
    // console.log('alterou');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <ul>
          {this.state.movieList.length && (
            this.state.movieList.map(({ id, title }) => {
              return (
                <li key={id}>{title}</li>
              )
            })
          )}
        </ul>
      </div>
    )
  }
}