var _keys = [];
var Store = require('flux/utils').Store;
// var OrganConstants = require('../constants/organ.js')
var AppDispatcher = require('../dispatcher/dispatcher.js');
var KeyStore = new Store(AppDispatcher);

KeyStore.all = function() {
  return _keys.slice(0);
};
