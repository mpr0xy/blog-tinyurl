var request = require('request');

var apps = {

  tinyurl: function (req, res, next) {
    if (!req.query.url){
      res.send({error: 'need url'});
      return next();
    }
    console.log(req.query.url);
    request.post(
      'http://dwz.cn/create.php', 
      {
        form: {
          url: req.query.url
        }
      },
      function(err, urlres, body){
        if (err){
          console.log(err);
        }
        else{
          console.log(body);
        }
        res.send(body);
        return next();
      }
    );
  }

}

module.exports = apps;