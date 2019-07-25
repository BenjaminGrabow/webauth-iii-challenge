const jwt = require('jsonwebtoken');
const secret = require('../database/secrets');

module.exports = (req, res, next) => {
  const authHeaderIsPresent = req.headers.authorization;

  if(authHeaderIsPresent){
    jwt.verify(authHeaderIsPresent, secret.jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({you: 'cant touch this !'});
      } else {
        req.decodedToken = decodedToken;
        console.log('decoded token', req.decodedToken)
        next();
        
      }
    });
  } else {
    res.status(401).json({ you: 'SHALL NOT PASS !'})
  }
};