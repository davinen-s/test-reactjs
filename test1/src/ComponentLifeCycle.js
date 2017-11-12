import React from 'react';
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  /**
   * Increment the 'val' state by 1.
   */
  update() {
    this.setState({ val: this.state.val + 1 });
  }

  /**
   * Fires up before rendering/adding the component to the DOM.
   */
  componentWillMount() {
    console.log('component will mount');
    this.setState({m: 2}); // setting a multiplier state variable.
  }


  /**
   * renders the element to be added to the DOM.
   */
  render() {
    console.log('render');
    return <button onClick={this.update}>Increment : {this.state.val * this.state.m}</button>
  }

  /**
   * Fires up after the component has been rendered.
   */
  componentDidMount() {
    console.log('component did mount');
    console.log(ReactDOM.findDOMNode(this)); // Fetch the current component's DOM element/node.
    this.interv = setInterval(this.update, 500); // execute this.update every half second.
  }

  /**
   * Fires up before unmount a component from the DOM.
   */
  componentWillUnmount(){
    console.log('componentWillMount');
    clearInterval(this.interv);
  }
}

/**
 * Class containing buttons elements for mount & unmount example.
 */
class ComponentLifeCycleButtons extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)} className="margin-right-15">Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
      </div>
    )
  }

  /**
   * Mount/Add the ComponentLifeCycle component on the DOM.
   */
  mount(){
    ReactDOM.render(<ComponentLifeCycle/>,  document.getElementById('componentLifeCycle'))
  }

  /**
   * Unmount/remove the ComponentLifeCycle component from the DOM.
   */
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('componentLifeCycle'))
  }

}


export default ComponentLifeCycleButtons