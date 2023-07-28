const { Schema, model } = require('mongoose');

// Schema to create a course model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^\S+@\S+\.\S+$/,
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',    
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  });
  
  UserSchema.virtual('friendCount').get(function (){
    return this.friends.length;
  });
  
const User = model('User', UserSchema);

module.exports = User;
