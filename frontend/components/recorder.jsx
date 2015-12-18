var React = require('react'),
    Track = require('../util/track.js'),
    KeyStore = require('../stores/keyStore.js');

var Recorder = React.createClass({
  getInitialState: function() {
    return ({ recording: false, track: new Track()})
  }
});

module.exports = Recorder;
