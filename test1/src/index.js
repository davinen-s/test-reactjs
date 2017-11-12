import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChildPropsExampleApp from './ChildPropsExampleApp'
import TitleApp from './TitleApp'
import NormalizeAndSyntheticEvent from './NormalizeAndSyntheticEvent'
import NodeReferenceExample from './NodeReferenceExample'
import ComponentLifeCycleButtons from './ComponentLifeCycle'
import PropsUpdateComponent from './PropsUpdateComponent'
import MapCreateComponent from './MapCreateComponent'
import HigherOrderComponent from './HigherOrderComponent'
import JsxLiveCompilerButton from './JsxLiveCompiler'

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

ReactDOM.render(
  <ComponentLifeCycleButtons />, document.getElementById('componentLifeCycleButtons')
)

ReactDOM.render(
  <PropsUpdateComponent />, document.getElementById('propsUpdateComponent')
)

ReactDOM.render(
  <MapCreateComponent />, document.getElementById('mapCreateComponent')
)

ReactDOM.render(
  <HigherOrderComponent />, document.getElementById('higherOrderComponent')
)

ReactDOM.render(
  <JsxLiveCompilerButton />, document.getElementById('jsxLiveCompiler')
)
