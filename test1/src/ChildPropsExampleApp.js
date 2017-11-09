import React from 'react';

class ChildPropsExampleApp extends React.Component {

  render(){
    return <Button>i <Heart/> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}


export default ChildPropsExampleApp