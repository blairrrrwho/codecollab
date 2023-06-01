const router = require('express').Router();

//get all posts
router.get("/",)
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// http://localhost:3001/api/thoughts
router.route('/').get(getThoughts).post(createThought);
// http://localhost:3001/api/thoughts/id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
