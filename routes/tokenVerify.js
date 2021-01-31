const jwt = require('jsonwebtoken')

exports.module = function(req, res, next){
    const token = req.header('auth-token');
    if(!token){
        return res.status(400).send("access denied");
    }

    try{
    const user = jwt.verify(token, "123abc123abc");
    console.log(user);
    req.user = user;
    next();
    }
    catch(err){
        res.status(400).send("access denied");
    }     
}
