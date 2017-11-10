var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
var data;
router.get('/', function (req, res, next) {
  fs.readFile('././public/json/company.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = JSON.parse(data);
    console.log(data);
    res.render('index', { title: 'Express', company: data });
  });

});

module.exports = router;
