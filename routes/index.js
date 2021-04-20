const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const records = [{
  "name": "Linkin park",
  "title": "Unforgiven",
  "year": "1994"
},

  {"name": "Beatles",
  "title": "Let it be",
  "year": "1975"
},
]

router.get('/api/records', function(req, res,) {
  res.json(records)
})

router.post('/api/records', (req, res,) => {
  records.push({
    name: req.body.name,
    title: req.body.title,
    year: req.body.year,
  });
  res.redirect("/api/records")
});



module.exports = router;
