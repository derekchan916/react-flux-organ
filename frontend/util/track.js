var $ = require('jquery');

var track = function (attrs){
  var defaults = {
    name = "";
    roll = [];
  };

  this.attributes = $.extend(defaults, attrs || {});
};

track.prototype = {
  startRecording: function() {
    this.attributes.roll = [];
    this.start = Date.now();
  },

  addNotes = function(notes) {
    this.timeSlice = { time: this._timeDelta() };
    if (notes.length > 0) {
      timeSlice.notes = notes;
    }
    this.attributes.roll.push(timeSlice);
  },

  stopRecording = function([]) {
    this.addNotes([]);
  }

  _timeDelta = function() {
    return Date.now() - this.start;
  }
};
