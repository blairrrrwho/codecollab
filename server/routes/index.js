const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;

// test for file stucture; need to change all of the routes files