import React from 'react';

class NodeReferenceExample extends React.Component {

/**
 * Constructor.
 */
constructor(){
  super();
  this.state = {
    a: '',
    b: '',
    c: ''
}
}

/**
 * update function to set the state value of the variable 'a' and 'b'
 */
update(){
  this.setState({
    a: this.a.value,
    b: this.refs.b.value,
    c: this.c.refs.input.value
  })
}

  render(){
    return (
      <div>
        <input
        ref= {node => this.a = node}
        type="text"
        onChange={this.update.bind(this)}
        />
        {this.state.a}
        <hr/>
        <input
        ref= "b"
        type="text"
        onChange={this.update.bind(this)}
        />
        {this.state.b}
        <hr/>
        <Input
        ref= {component => this.c = component}
        update={this.update.bind(this)}
        />
        {this.state.c}
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return <input type="text" ref="input" onChange={this.props.update}/>
  }
}

export default NodeReferenceExample