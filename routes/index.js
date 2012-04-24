
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'KYSBA' })
};

exports.about = function(req, res){
  res.render('about', { title: 'KYSBA - About Us' })
};