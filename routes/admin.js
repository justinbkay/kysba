var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Database models
require('../models/boardmember').configureBoardMemberSchema(Schema, mongoose);
var BoardMember = mongoose.model('BoardMember');

exports.adminBoardOfDirectors = function(req, res){
  
  var query = BoardMember.find({});
  query.exec({}, function(err, members) {
    if (err) {
      console.log("error on finding board");
    };
    res.render('admin/admin_board_of_directors', { 
        title: 'Kuna Youth Softball and Baseball Association - Board of Directors',
        members: members
      });
  });
};