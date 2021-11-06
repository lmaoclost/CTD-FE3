import { Component } from 'react';
import './style.scss';

export default class Increment extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
  }
  somaUm = () => {
    this.setState({
      valor: this.state.valor + 1
    });
  }
  render() {
    return (
      <>
        {/* Incremental */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
          <h2>{this.state.valor}</h2>
          <button className="btn btn-primary" onClick={this.somaUm}>Soma um</button>
        </div>
      </>
    )
  }
}