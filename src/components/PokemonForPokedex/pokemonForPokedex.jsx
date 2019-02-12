import React from 'react';
import { Sprite } from '../Sprite/sprite';
import styles from './pokemonForPokedex.module.css';
import { Link } from "@reach/router"

export class PokemonForPokedex extends React.Component {
    state = { infoPokemonPokedex: null }

    infoPokemonPokedex = (url) => {
        if (!url) return
        return fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ infoPokemonPokedex: data }))
    }

    componentDidMount() {
        this.infoPokemonPokedex(this.props.url)
    }

    render() {
        const { infoPokemonPokedex } = this.state
        if (!infoPokemonPokedex) return <h2>{this.props.name}</h2>

        const { name, sprites } = infoPokemonPokedex

        return (
        <Link to={`/pokemon/${name}`}>
        <div className={styles.centerElement}>
            <h2>{name}</h2>
            <div>
                <Sprite key={name} url={sprites.front_default} name={name} />
            </div>
        </div>
        </Link>)
    }
}