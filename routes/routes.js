const express = require('express');
const {autocapitalize} = require("../utils/utils");
const router = express.Router();

router.get('/', (req, res) => {
    const text = req.query.text;

    res.send(`Hello - ${autocapitalize(text)}`);
})

router.post('/test', (req, res) => {
    const bodyParams = req.body;
    res.send(`Params -- are: ${JSON.stringify(bodyParams)}`);
})

module.exports = router;
