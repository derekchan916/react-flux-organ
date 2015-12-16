var React = require('react');
var ReactDOM = require('react-dom');
var Organ = require('./components/organ.jsx');
var $ = require('jquery');

require('./util/KeyListener');

$(function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Organ/>, content);
});
