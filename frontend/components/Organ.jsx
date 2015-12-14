var React = require('react');
var NoteKey = require('../components/noteKey.jsx');
    // JukeBox = require('../components/JukeBox'),
    // Recorder = require('../components/Recorder'),
var TONES = require("../constants/tones.js");
var KeyStore = require('../stores/keyStore.js');

var Organ = React.createClass({
  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  componentDidMount: function () {
    KeyStore.addListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        <div className="keys group">
        {
          Object.keys(TONES).map(function (noteName) { //C5, etc
            return (<NoteKey noteName={noteName} key={noteName}/>);
          })
        }
        </div>
        <Recorder />
        <JukeBox />
      </div>
   );
  },

  _onChange: function () {
    this.setState({notes: KeyStore.all()});
  }
});

module.exports = Organ;
