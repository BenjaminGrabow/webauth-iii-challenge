module.exports = role => {

  return function(req, res, next) {
    if(req.decodedToken.roles && req.decodedToken.includes(role)) {
      next();
    } else {
      res.status(403).json({ you: 'Have no power here !'});
    }
  }
}