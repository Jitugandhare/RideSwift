const express = require('express');
const userRouter = express.Router();
const { body } = require('express-validator');
const { userRegistration, userLogin } = require('../controllers/user.controller');


userRouter.post('/register', [
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('fullname,firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userRegistration);



module.exports = userRouter;