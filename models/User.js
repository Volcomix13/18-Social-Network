const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
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
      type: ObjectId,
      ref: 'Thought',    
    },
    friends: {
      type: ObjectId,
      ref: 'User'
    },
  });
  
  userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
  });
  
const User = model('User', userSchema);

module.exports = User;
