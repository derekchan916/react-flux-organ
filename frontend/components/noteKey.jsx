var React = require('react'),
    KeyStore = require('../stores/keyStore.js'),
    Note = require('../util/note.js'),
    TONES = require('../constants/tones.js');

var NoteKey = React.createClass({
  getInitialState: function () {
    return { pressed: this.thisKeyPressed() };
  },

  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this._onChange);
  },

  thisKeyPressed: function () {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },

  _onChange: function () {
    var pressed = this.thisKeyPressed();
    if (pressed) {
      this.note.start();
    } else {
      this.note.stop();
    }
    this.setState({ pressed: pressed });
  }

  render: function () {
    var className = "note-key";
    if(this.state.pressed){
      className += " pressed";
    }
    return <div className={className}>{this.props.noteName}</div>;
  },
});

module.exports = NoteKey;
