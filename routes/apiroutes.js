const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notesDB = require('../db/db.json')

router.get('/notes', (req, res) => {
  res.status(200).json(notesDB)
})


router.post('/notes', (req, res) => {

  console.log(req.body)
  fs.readFile(path.join(__dirname, '../db/db.json') , 'utf8', (err, dbNotes)=>{
    if(err){
      return console.log(err)
    }
    dbNotes = JSON.parse(dbNotes)
    let id = dbNotes.length;
    let newNote = {title: req.body.title, text: req.body.text,id: id}
    let update = dbNotes.concat(newNote)

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(update), (err, data) =>{
      if(err){
        return console.log(err)
      }
      // res.status(200).json(update)
      return res.json(update)
    })
    

  })

})

  router.get('/notes/api', (req, res)=>{
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data)=>{
      if(err){
        return console.log(err) 
      }
      console.log('New note ', data)
      return res.json(JSON.parse(data))
    })
  })
  // add the request body to your db array (.push())
  // rewrite the db.json file with the updated DB array
  // return the updated array as a json with a status of 200
  // add a unique ID to your request body (Look up Date object in js)


router.put('/notes/:id', (req, res) =>{
  const id = JSON.parse(req.params.id)

  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, dbNotes)=>{
    if(err){
      return console.log(err) 
    }
    dbNotes.JSON.parse(dbNotes)

    dbNotes = dbNotes.filter(results => results.id !== id)

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbNotes), (err, data) =>{
      if(err){
        return console.log(err)
      }
      res.status(200).json(dbNotes)
      return res.json(dbNotes)
  })
})
})

// localhost:3001/api/notes/47
router.delete("/notes/:id", (req, res) => {
  console.log(req.params.id) // should return 47
  const id = JSON.parse(req.params.id)
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, dbNotes)=>{
    if(err){
      return console.log(err) 
    }
    let cleanNotes = JSON.parse(dbNotes)
    console.log(dbNotes)
    console.log(cleanNotes)

    dbNotes = cleanNotes.filter(results => results.id !== id)

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbNotes), (err, data) =>{
      if(err){
        return console.log(err)
      }
      res.status(200).json(dbNotes)
      return;
    })
  })
})
  


module.exports = router;