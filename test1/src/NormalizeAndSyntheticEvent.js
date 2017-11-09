import React from 'react';

class NormalizeAndSyntheticEvent extends React.Component {
  constructor(){
    super(); //initialize the context.
    this.state = {currentEvent: '---'} //initialzie the 'currentEvent' state.
    this.update = this.update.bind(this)
  }

/**
 * update the 'currentEvent' state with the captured event's type.
 * @param {Event} e
 */
  update(e){
    this.setState({currentEvent: e.type}); // setting the currentEvent to the event's type.
  }

  render() {
    return (
      <div>
        <textarea
        onKeyPress={this.update}
        onCopy={this.update}
        onCut={this.update}
        onPaste={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        onTouchStart={this.update}
        onTouchMove={this.update}
        onTouchEnd={this.update}
        cols="30"
        rows="10"

        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

export default NormalizeAndSyntheticEvent