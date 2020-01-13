const router = require('express').Router();

const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const verify = require('./verifyToken')

/* 
/users/signin -> POST - success/fail
/users/register -> POST - User

AUTHENTICATION REQUIRED


USERS

/users -> GET - All users //AUTH
/users/:userId/ -> GET - User //AUTH
/users/:userId/ -> PUT - Update User //AUTH
/user/:userId/ -> DELETE - Delete User //AUTH

NOTE GROUPS
/users/:userId/notes/ -> GET - user notegroups & notes //AUTH
/users/:userId/notes/ -> POST - add empty note group //AUTH
/users/:userId/notes/:noteGroupId/ -> DELETE - delete note group with notes in it //AUTH
/users/:userId/notes/:noteGroupId/ -> PUT - update note group //AUTH

NOTES

/users/:userId/notes/:noteGroupId/ -> POST - add note //AUTH
/users/:userId/notes/:noteGroupId/:noteId -> DELETE - delete note //AUTH
/users/:userId/notes/:noteGroupId/:noteId -> PUT - update note //AUTH
*/



//SIGN IN
router.route('/signin').post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //check if user exists
    const user = await User.findOne({email: email});
    if(user === false) return res.status(400).send('Email or password is wrong.');

    //PASSWORD IS CORRECT
    const validPassword = await bcrypt.compare(password, user.hashPassword)
    if(!validPassword) return res.status(400).send('Email or password is wrong.');

    //CREATE USER AND ASSIGN TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).header('user_id', user._id).send('Logged In')
})


//REGISTER
router.route('/register').post(async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //check if user is already in database
    const emailExist = User.findOne({email: email});
    if(emailExist === true) return res.status(400).send('Email already exists');
    
    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({username, email, hashPassword})

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})


//ALL USERS
router.route('/').get(verify, (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;