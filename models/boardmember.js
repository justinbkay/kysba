var configureBoardMemberSchema = function(Schema, mongoose) {
  BoardMember = new Schema({
    title: String,
    firstName: String,
    lastName: String,
    email: String,
    order: Number
  });
  
  BoardMember.virtual('fullName').get(function() {
    if (this.firstName !== undefined && this.lastName !== undefined) {
      return this.firstName + ' ' + this.lastName;
    };
    
  });
  
  mongoose.model('BoardMember', BoardMember);
  
};
  
module.exports.configureBoardMemberSchema = configureBoardMemberSchema;