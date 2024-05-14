var express = require('express');
var router = express.Router();
var bodyPraser = require('body-parser');
var catalogRouter = require('./routes/catalog');
require('dotenv').config();
const {sendMessage , getMessageInput} = require('../messageHelper');
app.use ('./catalog', catalogRouter);

router.use(bodyPraser.json());
router.post('/', function(req ,res, next){
    var data = getMessageInput(process.env.RECIPIENT_WAID, 'Welcome to the Movie Ticket Demo App for Node.js!');

    sendMessage(data).then(function(response){
        res.redirect('/catalog');
        res.sendStatus(200);
        return;
    })
    .catch(function(error){
        console.log(error);
        console.log(error.response.data);
        res.sendStatus(500);
        return;
    });
});

module.exports = router;