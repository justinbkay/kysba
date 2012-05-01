var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Database models
require('../models/boardmember').configureBoardMemberSchema(Schema, mongoose);
var BoardMember = mongoose.model('BoardMember');
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

exports.codeOfConduct = function(req, res){
  res.render('code_of_conduct', { title: 'Kuna Youth Softball and Baseball Association - Code of Conduct' })
};

exports.boardOfDirectors = function(req, res){
  
  var query = BoardMember.find({}, [], {sort: [['order', 1]]}, function(err, members) {
    
    if (err) {
      console.log("error on finding board");
    };
    res.render('board_of_directors', { 
        title: 'Kuna Youth Softball and Baseball Association - Board of Directors',
        members: members
    });
  });
};

exports.fields = function(req, res){
  res.render('fields', { title: 'Kuna Youth Softball and Baseball Association - Field Locations' });
};

exports.lostAndFound = function(req, res){
  res.render('lost_and_found', { title: 'Kuna Youth Softball and Baseball Association - Lost and Found' })
};

