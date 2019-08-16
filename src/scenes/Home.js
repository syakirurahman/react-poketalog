/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Pokemon from '../services/Pokemon';

export default class Home extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	pokemonList: []
    }

  }

  componentDidMount() {

		Pokemon.getPokemonList().then((result) => {
			this.setState({
				pokemonList:result.data.pokemons
			});
		})
  }

	render() {
	  return (
	  <div className="container">
			<div className="scroll-view">
		    <div className="main-block">
						{
							this.state.pokemonList.map((item) => {
								return (
									<div className="pokemon">
									<div className="pokemon-number">#{item.number}</div>
						      <img src="{item.image}" class="pokemon-thumbnail"/>
						      <div className="pokemon-types">
						      	{
						      		item.types.map((type, index) => {
						      			return(<div className="pokemon-type" key={index}>{type}</div>);
						      		})
						      	}
						      </div>
									<div className="pokemon-name">{item.name}</div>
									</div>
								);
							})
						}
		      </div>
			</div>
		</div>
	  );
  }
}
