var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    account: {type:String},
    password: {type:String},
    username: {type:String}
});


module.exports = mongoose.model('users',UserSchema);