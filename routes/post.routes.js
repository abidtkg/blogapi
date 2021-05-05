const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const posts = [
        {
            postid: '1234',
            title: 'Hello Word 1',
            body: 'this is post body'
        },
        {
            postid: '54121',
            title: 'Hello Word 2',
            body: 'this is post body'
        }
    ]
    res.json(posts);
});

module.exports = router;