
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Kuna Youth Softball and Baseball Association' })
};

exports.about = function(req, res){
  res.render('about', { title: 'Kuna Youth Softball and Baseball Association - About Us' })
};

exports.volunteers = function(req, res){
  res.render('volunteers', { title: 'Kuna Youth Softball and Baseball Association - Volunteer' })
};