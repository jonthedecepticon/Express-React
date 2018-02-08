var express = require('express');
var router = express.Router();

/* GET resorts listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
    id: 1,
    name: "Brighton",
    map: "http://www.tellurideskiresort.com/uploaded/maps/1718_Telluride_Trail_Map_MAIN_72ppi.png",
    totalTrails: 32,
    totalMiles: 83,
    averageDifficulty: "Medium"
  }, {
    id: 2,
    name: "Snowbird",
    map: "http://www.tellurideskiresort.com/uploaded/maps/1718_Telluride_Trail_Map_MAIN_72ppi.png",
    totalTrails: 35,
    totalMiles: 99,
    averageDifficulty: "Difficult"
  }, {
    id: 3,
    name: "Alta",
    map: "http://www.tellurideskiresort.com/uploaded/maps/1718_Telluride_Trail_Map_MAIN_72ppi.png",
    totalTrails: 52,
    totalMiles: 112,
    averageDifficulty: "Difficult"
  }, {
    id: 4,
    name: "Sundace",
    map: "http://www.tellurideskiresort.com/uploaded/maps/1718_Telluride_Trail_Map_MAIN_72ppi.png",
    totalTrails: 21,
    totalMiles: 53,
    averageDifficulty: "Easy"
  }]);
});

module.exports = router;
