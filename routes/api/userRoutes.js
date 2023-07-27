const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');


router.route('/').get(getAllUser).post(createUser);


router
  .route('/:Id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
