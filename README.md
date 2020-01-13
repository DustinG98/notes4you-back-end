# notes4you-back-end

## Register User
***
`POST /api/auth/users/register`


### Headers
| Name              | Type            |
| ----------------- |:---------------:|
| None              | none            |

### Example Request
```javascript
axios.post('/register', {
        "username": "test123",
        "email": "test@test.com",
        "password": "test123"
})
```

### Example Response
`User Added!`


## Sign In
***
`POST /api/auth/users/signin`


### Headers
| Name              | Type            |
| ----------------- |:---------------:|
| None              | none            |

### Example Request
```javascript
axios.post('/login', {
        "email": "test@test.com",
        "password": "test123"
})
```

### Example Response
`Logged In!`

