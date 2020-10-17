var connection = require('../config');
module.exports.register=function(req,res){
    var today = new Date();
    var password = req.body.password;
    var repassword = req.body.repassword;
    if(password != repassword){
        res.json({
            status:false,
            message:'Passwords not matching'
        })
    }else{
    var users={
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password,     
    }
    connection.query('INSERT INTO register SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
}