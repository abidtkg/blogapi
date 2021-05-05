const express = require('express');
const app = express();

// IMPORT ROUTES
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/users.routes');
const errorRoutes = require('./routes/error.routes');

// IMPLEMENT ROUTE
app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('**', errorRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Home Page'});
});

app.listen(3000, () => console.log('App Running'));