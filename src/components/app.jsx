import React from 'react';
import { Router } from "@reach/router"
import { Pokedex } from "./Pokedex/pokedex"
import { Pokemon } from "./Pokemon/pokemon"
import { Type } from './Type/type';


export class App extends React.Component {
    render() {
        return (
            <Router>
                <Pokedex path="/" />
                <Pokemon path="pokemon/:name" />
                <Type path="type/:name" />
            </Router>
        )
    }
}