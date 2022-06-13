const express = require("express")
const router = express.Router()
const axios = require('axios')

router.all('/:api_name', (req, res) => {
    console.log(req.params.api_name)
    axios.get('http://localhost:3001/' + req.params.api_name).then((response) => {
            res.send(response.data)
        })
        .catch((error) => {
            alert(error);
        });
})

module.exports = router