const { Router } = require("express");

const router = Router()

router
    .post('/usuarios')
    .get('/usuarios')
    .get('/usurios/id/:id')
    .put('/usurios/id/:id')
    .delete('/usuarios/id/:id')

module.exports =  router