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
axiosWithAuth.post('/register', {
        "username": "test123",
        "email": "test@test.com",
        "password": "test123"
})
```

### Example Response
`User Added!`