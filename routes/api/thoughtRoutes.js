const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,

} = require('../../controllers/thoughtController');


router.route('/').get(getAllThought).post(createThought);


router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
