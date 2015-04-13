var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    //账号
    account: {
        type: String,
        //唯一
        unique: true
    },
    //密码
    password: {
        type: String
    },
    //用户名
    username: {
        type: String
    },
    //关注者
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});


module.exports = function(db){
    return db.model('user', UserSchema)
};