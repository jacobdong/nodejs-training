// 获取cmd 中的参数
var logger = require('../_config/logConfig')('getCliParams.js');

process.argv.forEach(function(val, index, array) {
  console.info(index + ': ' + val);
});


console.debug('获取到的参数为：' + process.argv[2]);

