var mongoose = require('mongoose');
var url = "mongodb://localhost/test"
var db = mongoose.createConnection(url);

db.once('open',function(){
    console.log("# db has been connected");
})
db.on('err',function(err){
    console.log("# err");
})

module.exports = db;