import React from 'react';
import styles from './sprite.module.css';

const spriteNameTranslations = {back_default: 'Dos', 
    back_female: 'Dos femelle', 
    back_shiny: 'Dos shiny',
    back_shiny_female: 'Dos femelle shiny', 
    front_default: 'Face', 
    front_female: 'Face femelle', 
    front_shiny: 'Face shiny', 
    front_shiny_female: 'Face femelle shiny'}

export class Sprite extends React.Component {
    render() {
        const description = this.props.spriteName && <p className={styles.centerText}>{spriteNameTranslations[this.props.spriteName]}</p>
        
        return <div className={this.props.className}>
        <img className={styles.centerText} alt={this.props.name} src={this.props.url}/>
        {description}
    </div>
    }
}