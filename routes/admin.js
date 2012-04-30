var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Database models
require('../models/boardmember').configureBoardMemberSchema(Schema, mongoose);
var BoardMember = mongoose.model('BoardMember');

exports.adminBoardOfDirectors = function(req, res) {
  BoardMember.find({}, [], {sort: [['order', 1]]}, function(err, members) {
    if (err) {
      console.log("error on finding board");
    };
    res.render('admin/admin_board_of_directors', { 
        title: 'Kuna Youth Softball and Baseball Association - Board of Directors',
        layout: 'admin/layout',
        members: members
      });
  });
};

exports.adminBoardOfDirectorsEdit = function(req, res) {
  BoardMember.findById(req.params.id, function(err, member) {
    if (member === null) {
      console.log("Boardmember not found");
      res.send("Unable to find that Boardmember");
    } else {
      res.render('admin/admin_board_of_directors_edit', {
        title: 'Kuna Youth Softball and Baseball Association - Edit Board Member',
        layout: 'admin/layout',
        member: member
      });
    };
  });
};

exports.adminBoardOfDirectorsUpdate = function(req, res) {
  
  // build the updated data object
  var updatedData = {
    title: req.body.title,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    order: req.body.order
  }
  
  BoardMember.findById(req.params.id, function(err, member) {
    if (member === null) {
      console.log("Boardmember not found");
      res.send("Unable to find that Boardmember");
    } else {
      BoardMember.update({_id: req.params.id}, updatedData, {multi: false}, function(err, numAffected) {
        if (err) {
          console.log('Update Error Occurred');
          res.send('Update Error Occurred ' + err);

        } else {

          console.log("update succeeded");
          console.log(numAffected + " document(s) updated");

          res.redirect("/admin/board_of_directors/");

        }
      });
    }
  });
};