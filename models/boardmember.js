var configureBoardMemberSchema = function(Schema, mongoose) {
  BoardMember = new Schema({
    title: String,
    firstName: String,
    lastName: String,
    email: String
  });
  
  function fullName (bm) {
    return firstName + ' ' + lastName;
  }

  mongoose.model('BoardMember', BoardMember);
  
};
  
module.exports.configureBoardMemberSchema = configureBoardMemberSchema;