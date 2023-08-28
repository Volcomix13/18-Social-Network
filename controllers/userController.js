const { User, Thought } = require('../models');

const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      // Proper error logging here
      console.error(err);
      res.status(500).json(err);
    }
  },

  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      // Wrap deleteMany in try-catch
      try {
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
      } catch (thoughtsErr) {
        console.error(thoughtsErr);
        // Handle the error appropriately
        res.status(500).json({ message: 'Error while deleting thoughts' });
        return;
      }

      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId }, // Filter
        { $push: { friends: req.body.friendId } }, // Update
        { new: true } // Options
      );
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId }, // Filter
        { $pull: { friends: req.params.friendId } }, // Update
        { new: true } // Options
      );
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;


