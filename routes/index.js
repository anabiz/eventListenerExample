var express = require('express');
var router = express.Router();

const { myEmitter } = require("../registerEvents/eventTest")



/* GET home page. */
router.get('/', function(req, res, next) {
  myEmitter.emit('event', {name:"mr Tony", believe:"in my lord,Jesus cHrist"});
   res.send({ title: 'Express' });
});

module.exports = router;
