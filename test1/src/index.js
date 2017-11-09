import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChildPropsExampleApp from './ChildPropsExampleApp'
import TitleApp from './TitleApp'
import NormalizeAndSyntheticEvent from './NormalizeAndSyntheticEvent'
import NodeReferenceExample from './NodeReferenceExample'

ReactDOM.render(
  <TitleApp />, document.getElementById('title')
)

ReactDOM.render(
  <App testTxt="overriden value of props"/>, document.getElementById('root')
)

ReactDOM.render(
  <ChildPropsExampleApp />, document.getElementById('childPropsExample')
)

ReactDOM.render(
  <NormalizeAndSyntheticEvent />, document.getElementById('normalizeAndSyntheticEvent')
)

ReactDOM.render(
  <NodeReferenceExample />, document.getElementById('nodeReferenceExample')
)
