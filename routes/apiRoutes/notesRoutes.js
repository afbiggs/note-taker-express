const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notesArray } = require('../../db/notes');

// gets api/notes in JSON 
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
  // this sets id based on outcome of  the next index of the array
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

// route parameters
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;