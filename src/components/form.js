import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonList from './pokemonList';
import { getByName } from '../actions/pokemones';


class Form extends Component{
  constructor(props){
    super(props);
    
    this.getName = this.getName.bind(this);
    this.state= {
      pokemones: []
    }
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({
      pokemones: nextProps.info
    })
  }
  
  getName(){
  const valor = this.value.value;
    this.props.getByName(valor);
  }
  
  render(){
    return(
      <div>
        <input type="text" ref={(node)=>{ this.value = node }}/>
        <button onClick={this.getName}>Search</button>
        <div>
          <PokemonList pokemones={this.state.pokemones}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    info: state.pokemonReducer.data
  })


const mapDispatchToProps = (dispatch)=>({
  getByName: (name)=>{
    dispatch(getByName(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);