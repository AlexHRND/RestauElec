const express = require('express')
const router = express.Router()
const axios = require('axios')
const registry = require('./registry.json')
const fs = require('fs')
const loadbalancer = require('../util/loadbalancer')
const { TIMEOUT } = require('dns')


router.all('/:apiName/:path', (req, res) => {
    const service = registry.services[req.params.apiName]
    if (service) {
        if (!service.loadBalanceStrategy) {
            service.loadBalanceStrategy = 'ROUND_ROBIN'
            fs.writeFile('./routes/registry.json', JSON.stringify(registry), (error) => {
                if (error) {
                    res.send("Couldn't write load balance strategy" + error)
                }
            })
        }

        const newIndex = loadbalancer[service.loadBalanceStrategy](service)
        const url = service.instances[newIndex].url
            //const url = "http://localhost:8000"
        const date = new Date();
        console.log(url + req.params.path, " ", date.toISOString())

        axios({
            method: req.method,
            url: url + req.params.path,
            headers: req.headers,
            data: req.body
        }).then((response) => {
            res.send(response.data)
        }).catch(error => {
            res.send("")
        })
    } else {
        res.send("API Name doesn't exist")
    }
})

module.exports = router