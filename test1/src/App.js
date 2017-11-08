import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super(); // super assign the current context to the keyword ==> athis
    this.state = {
      txt: 'this is the state txt',
      num: 0
    }
  }
  update( e ){
    this.setState({txt: e.target.value});
    this.setState({num: e.target.value.length})
  }
  render(){
  // let propValue = this.props.testTxt;
    return (
    <div>
      <h1>Hello Fucking World 2</h1>
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <b> {this.state.txt} - {this.state.num}</b>
      </div>
    </div>
    )
  }
}

App.propTypes = {
  testTxt: PropTypes.string.isRequired,
  testNum: PropTypes.number.isRequired

}

App.defaultProps = {
  testTxt: "This is the default text for 'testText'"
}

export default App