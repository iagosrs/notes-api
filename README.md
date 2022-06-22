## Notes-api
This api where can be used to create Notes, Update, Delete and find a Note by id.


## Tech stack
- Node.js
- Mongo db

## Build
To build the project it is just need to clone this repo and then run:
**npm run dev** 

## API'S

### Create a note
**POST** - **/notes** 
#### Body
```
x-www-form-urlenconded
title STRING
body STRING
```
#### Expected result

```
{
    "acknowledged": true,
    "insertedId": "62b2feea72fe1ca4408b2b47"
}
```

### Delete a note
**DELETE** - **/notes/NOTE_ID** 


#### Expected result

```
{
   Note NOTE_ID deleted!
}
```

### Update a note
**PUT** - **/notes/NOTE_ID** 
```
x-www-form-urlenconded
title STRING
body STRING
```
#### Expected result

```
{
    "text": STRING,
    "title": STRING
}
```

### Find a note
**GET** - **/notes/NOTE_ID** 

#### Expected result

```
{
    "_id": NOTE_ID,
    "text": STRING,
    "title": STRING
}
```

## Use Postman to see the api
In order to test it using postman, only need to add a collection using the following link:

https://www.getpostman.com/collections/0ead63ad2c34fcfdff96

End Points
