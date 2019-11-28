import React from "react";
import { Carousel } from "../Carousel/carousel";
import styles from "./pokemon.module.css";
import * as api from "../../api";
import { Link } from "@reach/router";

export class Pokemon extends React.Component {
  state = { infoPokemon: null };

  componentDidMount() {
    api
      .getPokemon(this.props.name)
      .then(response => response.json())
      .then(data => this.setState({ infoPokemon: data }));
  }

  render() {
    const { infoPokemon } = this.state;

    if (!infoPokemon) return <h2>{this.props.name}</h2>;

    const { name, sprites } = infoPokemon;

    const allSprites = <Carousel sprites={sprites} name={name} />;

    return (
      <div>
        <h2 className={styles.centerElement}>{name}</h2>
        <Link to={`/`}>Retour</Link>
        <div className={styles.allSprite}>{allSprites}</div>
        <p>Taille : {infoPokemon.height}</p>
        <p>Poids : {infoPokemon.weight}</p>
        <p>Type : </p>

        <ul>
          {infoPokemon.types.map(type => (
            <Link key={type.type.name} to={`/type/${type.type.name}`}>
              <li>{type.type.name}</li>
            </Link>
          ))}
        </ul>
        <a href={require("../../PokePDF.pdf")} download="pokePDF">
          Download PDF
        </a>
      </div>
    );
  }
}
