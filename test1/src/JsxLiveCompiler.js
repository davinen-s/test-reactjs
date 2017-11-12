import React from 'react';
import ReactDOM from 'react-dom';
import './css/jsx-compiler.css'


class JsxLiveCompiler extends React.Component {

  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }

  update(e){
    let code = e.target.value;
    try {
      this.setState ( {
        output: window.Babel.transform(code, {presets: ['es2015', 'react']}).code,
        err: ''
      })
    } catch (error) {
      this.setState({err: error.message});
    }
  }



  /**
  * render method.
  */
  render(){

    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}


class JsxLiveCompilerButton extends React.Component {

  showPage(){
    ReactDOM.render(<JsxLiveCompiler/>, document.getElementById('wrapper'));
  }

   /**
   * render method.
   */
   render(){
     return (
       <button onClick={this.showPage.bind(this)}>Show Live JSX Compiler Page</button>
     )
   }
}


export default JsxLiveCompilerButton