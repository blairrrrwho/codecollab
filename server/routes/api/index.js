const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);

// http://localhost:3001/api/thoughts
router.use('/thoughts', thoughtRoutes);
// localhost:3001/api/users
module.exports = router;
