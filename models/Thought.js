const { Schema, model, Types} = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
   timestamps: true
  }
);


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength:1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  });
  
  ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
