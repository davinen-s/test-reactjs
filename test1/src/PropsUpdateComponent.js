import React from 'react';
import ReactDOM from 'react-dom'

/**
 * Example showing how state can control when to render and different functions that
 * can be executed before/after/during/... rendering.
 */
class PropsUpdateComponent extends React.Component {

  constructor(){
    super();
    this.state= {increasing: false};
  }

  update(){
    ReactDOM.render(
      <PropsUpdateComponent currentVal={this.props.currentVal + 1}/>,
      document.getElementById('propsUpdateComponent')
    )
  }

/**
* Update state before render() is called.
*/
componentWillReceiveProps(nextProps){
  this.setState({increasing: nextProps.currentVal > this.props.currentVal});
}

/**
* Define the flag that decide when component should be updated.
*/
shouldComponentUpdate(nextProps, nextState){

  return nextProps.currentVal % 5 === 0;
}

/**
* Function to execute after component has been updated.
*/
componentDidUpdate(prevProps, prevState){
  console.log(`prevProps: ${prevProps.currentVal}`);
}


  render(){
    console.log(this.state.increasing);
    return(
      <button onClick={this.update.bind(this)}>
        {this.props.currentVal}
      </button>
    )
  }
}

PropsUpdateComponent.defaultProps = {currentVal: 0}

export default PropsUpdateComponent
