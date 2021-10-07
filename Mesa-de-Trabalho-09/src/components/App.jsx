import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';


// AREA DE TRABALHO --> Substituir pelo JSON
const pokedex = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ]
  }]
// AREA DE TRABALHO -----------------------------------


export default class App extends Component {

  // AREA DE TRABALHO --> Usar estrutura de Class Component
  pokemon = [pokedex[0].name, pokedex[0].id, pokedex[0].type];
  pokemons = pokedex;
  // AREA DE TRABALHO -------------------------------------------


  update(pokemon) {
    console.log(pokemon);
    // Nesta função, o Pokémon visível deve ser atualizado
    // Não vamos esquecer que se for uma função, devemos vinculá-la... como podemos evitar o uso do vínculo?
  }

  getPokemon = () => {
      if (this.pokemon[1]?.toString()?.length === 1) return `00${this.pokemon[1]}`
      if (this.pokemon[1]?.toString()?.length === 2) return `0${this.pokemon[1]}`
      if (this.pokemon[1]?.toString()?.length === 3) return `${this.pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    if(this.pokemon[2].length === 1) return this.pokemon[2][0]
    if(this.pokemon[2].length > 1) {
     for (let index = 0; index < this.pokemon[2].length; index++) {
       if(index === 0) phrase = this.pokemon[2][index]
       if(index !== 0) phrase = `${phrase} and ${this.pokemon[2][index]}`
     }
     return phrase
    }
  }

  render() {
    /* AREA DE TRABALHO
      Podemos usar a desestruturação ou modificar diretamente as variáveis ​​this.pokemon por this.state ...
    */

    return (
      <div style={{display:"flex"}}>
      <div className="container">
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={this.pokemon[0]} />
        <p id="name">{`${this.pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <Pokedex updateParent={this.update} pokemons={this.pokemons} />
    </div>
    )
  }
}


