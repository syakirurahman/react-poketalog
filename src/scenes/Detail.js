/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Pokemon from '../services/Pokemon';

export default class Detail extends Component {

	constructor(props) {
    super(props);
    const pokemonId = this.props.navigation.getParam('id', 'ID');
    this.state = {
      pokemonId: pokemonId,
    	pokemonDetail: null
    }
  }

  componentDidMount() {
		Pokemon.getPokemonById(this.state.pokemonId).then((result) => {
			this.setState({
				pokemonDetail:result.pokemon
      });
      console.log(result);
    })
    console.log(this.state.pokemonDetail);
  }

	render() {
	  return (
	  <div className="container">
			<div className="scroll-view">
		    <div className="main-block">
						test
        </div>
			</div>
		</div>
	  );
  }
}
