var mongoose = require('mongoose'),
    db = require('../_config/dbConfig'),
    logger = require('../_config/logConfig')('crud.js'),
    UserModel = require('../_model/UserModel')(db);



//清空测试数据



// 使用population 解析 dbRef
var lucy = new UserModel({
    account: 'lucy',
    password: 'lucy',
    username: 'lucy'
});

var lily = new UserModel({
    account: 'lily',
    password: 'lily',
    username: 'lily',
    followers: [lucy]
});

var removeUsers = function() {
        return UserModel.remove({}, function(err) {
            if (err) {
                console.error('remove users faild');
            } else {
                console.debug('remove users suceess');
            }
        })
    }
    // 增加
var saveUser = function() {
        return lucy.save(function() {
            console.debug('lucy has been created');
        }).then(lily.save(function() {
            console.debug('lily has been created');
        }));
    }
    // 查询

var queryUser = function() {
    UserModel.find({
        account: 'lily'
    }, function(err, result) {

        if (err) {
            console.error('remove users faild');
        } else {
            console.debug('# got result', result);
        }
    })
}


removeUsers()
    .then(saveUser)
    .then(queryUser());