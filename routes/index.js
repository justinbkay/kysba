
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

exports.boardOfDirectors = function(req, res){
  res.render('board_of_directors', { title: 'Kuna Youth Softball and Baseball Association - Board of Directors' })
};

exports.fields = function(req, res){
  res.render('fields', { title: 'Kuna Youth Softball and Baseball Association - Field Locations' })
};

exports.lostAndFound = function(req, res){
  res.render('lost_and_found', { title: 'Kuna Youth Softball and Baseball Association - Lost and Found' })
};