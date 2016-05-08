// 日志工具
// import the class
const nDeed = require( 'ndeed' );

// create an instance providing any static metadata
// you want added to all logs
const ndeed = new nDeed( {'app': 'mongodb_proj'} );

// metadata can be updated anytime
ndeed.meta = {'app': 'mongodb_proj', 'version': '0.1.0'}

// listen for the log event and do what you want with it
// any message filtering can be done here
ndeed.on('log', ( item ) => {
  console.log( item )
});

// errors will never be thrown by the library, but if error
// occurs you can listen for the error event
// ndeed.on('error', ( error ) => {
//   console.error( error )
// });

// create a logger for a specific module providing any metadata
// you want added to any logs created with this logger
const logger = ndeed.getLogger( {'module': 'logUtils'} );

// logger metadata can be updated anytime
// logger.meta = {'module': 'myModule'}

// enable or disable logging for a logger (default is true)
// if false, logging is disabled only for this logger
logger.enabled = true;

module.exports = {
 	//  暴露到外部到接口
  info: function(msg) {
    return _info(msg);
  },
  debug: function(msg) {
    return _debug(msg);
  },
  error: function(msg) {
    return _error(msg);
  },
  warn: function(msg) {
    return _warn(msg);
  },
  _toString: function(obj) {
    return _toString(obj);
  }
};
// private method
var _toString = function(obj) {
  var retStr = "";
  for (var prop in obj) {
    retStr += (prop+", ");
  }
  return  retStr;
};
var _info = function(msg) {
  return logger.info(msg);
};
var _debug = function(msg) {
  return logger.debug(msg);
};
var _error = function(msg) {
  return logger.error(msg);
};
var _warn = function(msg) {
  return logger.warning(msg);
};
