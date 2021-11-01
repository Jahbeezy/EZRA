const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notesDB = require('../db/db.json')

router.get('/notes', (req, res) => {
  res.status(200).json(notesDB)
})

router.post('/notes', (req, res) => {
  console.log(req.body)
  
  // add the request body to your db array (.push())
  // rewrite the db.json file with the updated DB array
  // return the updated array as a json with a status of 200
  // add a unique ID to your request body (Look up Date object in js)
})

// localhost:3001/api/notes/47
router.delete("/notes/:id", (req, res) => {
  console.log(req.params.id) // should return 47
})

module.exports = router;