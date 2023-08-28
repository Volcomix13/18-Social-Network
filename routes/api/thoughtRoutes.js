const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
  deleteReaction,

} = require('../../controllers/thoughtController');


router.route('/').get(getAllThoughts).post(createThought);


router.route("/:thoughtId").get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/students/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
