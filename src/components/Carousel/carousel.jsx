import React from 'react';
import { Sprite } from '../Sprite/sprite';

export class Carousel extends React.Component {
    state = {
        current: 0,
        urls: null
    }

    render() {

        const img = Object.keys(this.props.sprites)
        .filter(spriteName => this.props.sprites[spriteName])
        .map(spriteName =>
            <Sprite
                key={spriteName}
                spriteName={spriteName}
                url={this.props.sprites[spriteName]}
                name={spriteName} />
        )
        
        const plus = () => {
            this.setState({current: (this.state.current + 1)%img.length})
        }

        const moins = () => {
            this.setState({current: (this.state.current - 1 + img.length)%(img.length)})
        }

        return (
            <div>
                <button onClick={moins}>Avant</button>
                {img[this.state.current]}
                <button onClick={plus}>Après</button>
            </div>
        )
        // return null
    }
}