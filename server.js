const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

const database = {
    users: [
        {id: "123", name: 'Dusty', email: 'contact@dustingraham.tech', password: 'cookies', entries: 0, joined: new Date()},
        {id: "1235", name: 'Sally', email: 'sally@gmail.com', password: 'bananas', entries: 0, joined: new Date()} 
    ]
}

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


app.get('/', (req, res) => {
    res.send(database.users)
})

app.listen(5000, () => {
    console.log('connected')
})