var React = require('react'),
    Track = require('../util/track.js'),
    KeyStore = require('../stores/keyStore.js');

var Recorder = React.createClass({
  getInitialState: function() {
    return ({ recording: false, track: new Track()})
  },

  render: function() {
    return (
      <div classNmae="controls">
        <h3>Recorder</h3>
        <button onClick={this.recordClick} className="record-button">
          { this.recordingMessage() }
        </button>
        { this.trackSavingElements() }
        <button onClick={this.playClick} className={this.playClass()}>
          Play
        </button>
      </div>
    )
  },

  recordingMessage: function () {
    if (this.isRecording()) {
      return "Stop Recording";
    } else if (this.isDoneRecording()) {
      return "Done Recording";
    } else {
      return "Start Recording";
    }
  },

  playClick: function (e) {
    if(!this.isTrackNew()){
      this.state.track.play();
    }
  },

  isTrackNew: function () {
    return this.state.track.isBlank();
  },

  playClass: function () {
    return "play-button" + this.isTrackNew() ? "" : " disabled";
  },

  isDoneRecording: function () {
    return !this.isTrackNew() && !this.state.recording;
  }
});

module.exports = Recorder;
