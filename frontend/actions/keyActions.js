var AppDispatcher = require('../dispatcher/dispatcher.js');
var OrganConstants = require('../constants/organ.js');

var KeyActions = {
  groupUpdate: function (notes) {
    AppDispatcher.dispatch({
      actionType: OrganConstants.GROUP_UPDATE,
      notes: notes
    });
  },

  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_PRESSED,
      note: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: OrganConstants.KEY_RELEASED,
      note: noteName
    });
  }
};

module.exports = KeyActions;
