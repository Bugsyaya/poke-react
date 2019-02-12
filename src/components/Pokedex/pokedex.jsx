import React from 'react';
import * as api from '../../api'
import {PokemonForPokedex} from '../PokemonForPokedex/pokemonForPokedex'
import styles from './pokedex.module.css';

export class Pokedex extends React.Component {
    state = {allPokemons: null}

    componentDidMount() {
        api.getPokemons()
            .then(response => response.json())
            .then(data => this.setState({allPokemons: data}))
    }

    onNext = () => {
        if (!this.state.allPokemons || !this.state.allPokemons.next) return
        return fetch(this.state.allPokemons.next)
                .then(response => response.json())
                .then(data => this.setState({allPokemons: data}))
    }

    onPrevious = () => {
        if (!this.state.allPokemons || !this.state.allPokemons.previous) return
        return fetch(this.state.allPokemons.previous)
                .then(response => response.json())
                .then(data => this.setState({allPokemons: data}))
    }

    render() {
        const {allPokemons} = this.state
        const {count, next, previous, results = []} = allPokemons || {}

        if (!allPokemons) return <div>Chargement en cours</div>

        const list = results.map(({name, url}) => <PokemonForPokedex key={name} url={url} name={name}/>)

        return <div className={styles.fullHeight}>
            <h1 className={styles.centerElement}>Pokedex !</h1>
            <div className={styles.centerElement}>
                <button disabled={!previous} onClick={this.onPrevious}>previous</button>
                <button disabled={!next} onClick={this.onNext}>next</button>
            </div>
            <div className={styles.pokedex}>{list}</div>
            <div className={styles.centerElement}>
                <button disabled={!previous} onClick={this.onPrevious}>previous</button>
                <button disabled={!next} onClick={this.onNext}>next</button>
            </div>
        </div>
    }
}