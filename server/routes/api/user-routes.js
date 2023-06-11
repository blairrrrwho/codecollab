const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login,
} = require('../../controllers/user-controllers');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/user').get(authMiddleware, getSingleUser);