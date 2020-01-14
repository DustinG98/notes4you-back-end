# notes4you-back-end


### Index


#### [Register](#register-user)


#### [Sign In](#sign-in)


#### [Get All Users](#get-all-users)


#### [Get User By Id](#get-user-by-id)


#### [Update User By Id](#update-user)


#### [Delete User By Id](#delete_user)




***
## **Register User**
***
`POST /api/auth/users/register`


#### Headers
| Name              | Type            |
| ----------------- |:---------------:|
| None              | none            |

#### Example Request
```javascript
axios.post('/register', {
        "username": "test123",
        "email": "test@test.com",
        "password": "test123"
})
```

#### Example Response
`User Added!`


***
## **Sign In**
***
`POST /api/auth/users/signin`


#### Headers
| Name              | Type            |
| ----------------- |:---------------:|
| None              | none            |

#### Example Request
```javascript
axios.post('/signin', {
        "email": "test@test.com",
        "password": "test123"
})
```

#### Example Response
`Logged In!`



***
## **Get All Users**
***
`GET /api/auth/users`


#### Headers
| Name                    | Type              |
| ----------------------- |:-----------------:|
| auth-token              | String            |

#### Example Request
```javascript
axiosWithAuth().get('/')
```

#### Example Response
```json
[
    {
        "noteGroups": [],
        "_id": "5e1cfea90f0b4e081493dde1",
        "username": "test123",
        "email": "test@test.com",
        "hashPassword": "$2a$10$.UHoda7ravF8uRAtJAgrM.9.6vnibqMWS8BTAbDNt8ylZ1hvKSuGi",
        "createdAt": "2020-01-13T23:35:05.007Z",
        "updatedAt": "2020-01-13T23:35:05.007Z",
        "__v": 0
    },
    {
        "noteGroups": [],
        "_id": "5e1cfea90f0b4e081493dde123",
        "username": "test1235",
        "email": "test5123@test.com",
        "hashPassword": "$2a$10$.UHoda7ravF8uRAtJAgrM.9.6vnibqMWS8BTAbDNt8ylZ1hvKSuGi",
        "createdAt": "2020-01-13T23:35:05.007Z",
        "updatedAt": "2020-01-13T23:35:05.007Z",
        "__v": 0
    }
]
```


***
## **Get User By Id**
***
`GET /api/auth/users/:id`


#### Headers
| Name                    | Type              |
| ----------------------- |:-----------------:|
| auth-token              | String            |

#### Example Request
```javascript
axiosWithAuth().get('/:id')
```

#### Example Response
```json
{
    "noteGroups": [],
    "_id": "5e1cfea90f0b4e081493dde1",
    "username": "test123",
    "email": "test@test.com",
    "hashPassword": "$2a$10$.UHoda7ravF8uRAtJAgrM.9.6vnibqMWS8BTAbDNt8ylZ1hvKSuGi",
    "createdAt": "2020-01-13T23:35:05.007Z",
    "updatedAt": "2020-01-13T23:35:05.007Z",
    "__v": 0
}
```



***
## **Update User**
***
`PUT /api/auth/users/:id`


#### Headers
| Name                    | Type              |
| ----------------------- |:-----------------:|
| auth-token              | String            |

#### Example Request
```javascript
axiosWithAuth().put('/:id', {
    username: "New UserName",
    email: "new@email.com",
    password: "newPassWord"
})
```

#### Example Response
```json
"User Updated!"
```

***
## **Delete User**
***
`DELETE /api/auth/users/:id`


#### Headers
| Name                    | Type              |
| ----------------------- |:-----------------:|
| auth-token              | String            |

#### Example Request
```javascript
axiosWithAuth().delete('/:id')
```

#### Example Response
```json
"User Deleted!"
```
