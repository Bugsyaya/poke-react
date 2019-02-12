import React from 'react';
import * as api from '../../api';
import { PokemonForPokedex } from '../PokemonForPokedex/pokemonForPokedex';

export class Type extends React.Component {
    state = { type: null }

    componentDidMount() {
        api.getType(this.props.name)
            .then(response => response.json())
            .then(data => this.setState({ type: data }))
    }

    render() {
        if (!this.state.type) return <p>Chargement en cours</p>

        console.log(this.state.type.pokemon)
        const samePokemon = this.state.type.pokemon.map(({pokemon: {name, url}}) => {
            return <PokemonForPokedex
                key={name}
                url={url}
                name={name} />
        })
        return <div>
            {samePokemon}
        </div>
    }
}