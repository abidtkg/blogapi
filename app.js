const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const fruits = ['apple', 'banana', 'watermelon'];
    res.json({fruits: fruits});
});

app.listen(3000, () => console.log('App Running'));