const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,

} = require('../../controllers/userController.js');


router.route('/').get(getAllUsers).post(createUser);

router.route("/:userid").get(getUserById).put(updateUserById).delete(deleteUserById);

router.route("/:userId/friends/:friendID").post(addFriend).delete(removeFriend);

module.exports = router;
