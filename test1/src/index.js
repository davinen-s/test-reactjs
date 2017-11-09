import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChildPropsExampleApp from './ChildPropsExampleApp'

ReactDOM.render(
  <App testTxt="overriden value of props"/>, document.getElementById('root')
)

ReactDOM.render(
  <ChildPropsExampleApp />, document.getElementById('childPropsExample')
)
