var log4js = require('log4js');
log4js.configure({
  appenders: [{
    type: 'console'
  }, {
    type: 'file',
    filename: '../_logs/access.log',
    maxLogSize: 1024,
    backups: 4,
    category: 'normal'
  }],
  replaceConsole: true
});


var logger = function(name){
  var logger = log4js.getLogger(name);

  console.log('================================================');
  logger.trace('Entering cheese testing');
  logger.debug('Got cheese.');
  logger.info('Cheese is Gouda.');
  logger.warn('Cheese is quite smelly.');
  logger.error('Cheese is too ripe!');
  logger.fatal('Cheese was breeding ground for listeria.');
  console.log('================================================');
  return logger;
}

module.exports =  logger;

