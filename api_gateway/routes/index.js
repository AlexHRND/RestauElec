const express = require("express")
const router = express.Router()
const axios = require('axios')
const registry = require('./registry.json')

router.all('/:api_name/:path', (req, res) => {
    console.log(req.params.api_name)
    try {
        if (registry.services[req.params.api_name]) {
            axios({
                method: req.method,
                url: registry.services[req.params.api_name].url + req.params.path,
                headers: req.headers,
                data: req.body
            }).then((response) => {
                res.send(response.data)
            }).catch(error => { console.log(error) })
        } else {
            res.send("API name doesn't exist")
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/register', (req, res) => {
    const registrationInfo = req.body

})

module.exports = router