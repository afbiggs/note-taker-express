const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db.json');

// gets api/notes in JSON 
router.get('./lib.notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('./lib/notes', (req, res) => {

  // this sets id based on outcome of  the next index of the array
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

// route parameters for adding delete function
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;