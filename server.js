const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// parse POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
