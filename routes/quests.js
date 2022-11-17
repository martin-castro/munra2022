var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const quests =[
    {id: 1,
    text:"Terna: Conchita 2022"}
  ]
  res.json(quests)
});

module.exports = router;
