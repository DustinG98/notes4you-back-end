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
/ -> GET - return all users
/signin -> POST - success/fail
/register -> POST - User
/profile/:userId -> GET - User

*/


app.get('/', (req, res) => {
    res.send(database.users)
})

app.listen(5000, () => {
    console.log('connected')
})