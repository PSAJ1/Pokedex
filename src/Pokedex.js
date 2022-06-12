import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
class Pokedex extends React.Component {

    render() {
        return ( 
        <div className = 'Pokedex'>
        <h3>Total Experience:-{this.props.exp}</h3>
        <h2 className={this.props.isWinner?'win':'loser'}>{this.props.isWinner?"Winner!😃!":"Loser 😥😞"}</h2>
        <div className='d-flex flex-wrap justify-content-center Pokedex-card text-center'>
        {this.props.pokeman.map(p =><Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/> 
        )} 
        </div>
        </div>
        );
    }
}
export default Pokedex;