var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Database models
require('../models/boardmember').configureBoardMemberSchema(Schema, mongoose);
var BoardMember = mongoose.model('BoardMember');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' })
};

exports.about = function(req, res){
  res.render('about', { title: 'About Us' })
};

exports.volunteers = function(req, res){
  res.render('volunteers', { title: 'Volunteer' })
};

exports.codeOfConduct = function(req, res){
  res.render('code_of_conduct', { title: 'Code of Conduct' })
};

exports.registration = function(req, res) {
  res.render('registration', { title: 'Registration' });
};

exports.boardOfDirectors = function(req, res){
  
  var query = BoardMember.find({}, [], {sort: [['order', 1]]}, function(err, members) {
    
    if (err) {
      console.log("error on finding board");
    };
    res.render('board_of_directors', { 
        title: 'Board of Directors',
        members: members
    });
  });
};

exports.fields = function(req, res){
  res.render('fields', { title: 'Field Locations' });
};

exports.lostAndFound = function(req, res){
  res.render('lost_and_found', { title: 'Lost and Found' })
};

