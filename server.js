const express = require('express');
const app = express();


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
