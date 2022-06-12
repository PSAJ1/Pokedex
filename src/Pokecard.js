import React from 'react';
import './Pokecard.css'
const img_api="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let id=(num)=>(num<=999?`00${num}`.slice(-3):num);
class Pokedex extends React.Component {
    render() {
        return ( 
            <div className = 'Pokecard text-center'>
                <h2 className = 'pt-2 Pokecard-title' > { this.props.name } </h2>
                <div className='pokecard-img'> 
                    <img className = 'pt-2'
                        src = {img_api+id(this.props.id)+".png"}
                        alt = "NOT AVAILABLE" />
                </div>
                <h4 className = 'pt-4 Pokecard-data' > Type: -{ this.props.type } </h4>
                <h4 className = 'pt-1 Pokecard-data' > Exp: -{ this.props.exp } </h4>
            </div>
        );
    }
}
export default Pokedex;