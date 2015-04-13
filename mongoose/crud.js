var mongoose = require('mongoose'),
    db = require('../_config/dbConfig'),
    logger = require('../_config/logConfig')('crud.js'),
    UserModel = require('../_model/UserModel')(db);



UserModel.find(function(err, results) {
    if (err) {
        console.error('query error');
    } else {
        console.log(results);

        var newUser = new UserModel({
            account: 'user_' + results.length,
            password: 'password_' + results.length,
            username: 'username_' + results.length,
        });

        newUser.save(function() {
            console.info(newUser, 'has saved');
        });
    }
})
