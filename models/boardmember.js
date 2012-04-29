var configureBoardMemberSchema = function(Schema, mongoose) {
  BoardMember = new Schema({
    title: String,
    firstName: String,
    lastName: String,
    email: String
  });

  mongoose.model('BoardMember', BoardMember);
};
  
module.exports.configureBoardMemberSchema = configureBoardMemberSchema;