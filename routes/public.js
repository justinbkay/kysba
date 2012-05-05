var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Database models
require('../models/boardmember').configureBoardMemberSchema(Schema, mongoose);
var BoardMember = mongoose.model('BoardMember');
/*
 * GET home page.
 */

 exports.login = function(req, res) {
   res.render('login', { 
     title: 'Admin',
     layout: 'loginLayout'
   });
 };

 exports.authenticate = function(req, res) {
   if (req.body.username === 'admin' && req.body.password === '123') {
     req.session.authenticated = true;
     req.flash('info', 'You are logged in!');
     res.redirect("/admin/board_of_directors/");
     return
   } else {
     req.flash('error', 'Login Failed!');
     res.redirect('/login');
   }
 };

 exports.logout = function(req, res) {
   req.session.regenerate();
   req.flash('info', 'You have been logged out');
   res.redirect('/');
 };

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

