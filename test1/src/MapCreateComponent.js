import React from 'react';


class MapCreateComponent extends React.Component {

  constructor(){
    super();
    this.state = { items: []};
  }

  /**
  * Fetch json objects before mounting.
  */
  componentWillMount(){

    fetch( 'https://swapi.co/api/people/?format=json')
    .then( response => response.json())
    .then( ({ results: items}) => this.setState({items}));
  }

  filter(e){
    this.setState({filter: e.target.value});
  }


  /**
  * render method.
  */
  render(){
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item =>
      item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input onChange={this.filter.bind(this)}/>
        {items.map(item =>
          <Person key={item.name} person={item}/>
        )}
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default MapCreateComponent;