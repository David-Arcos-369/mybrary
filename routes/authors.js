const express = require('express')
const router = express.Router()

//All authors route
router.get('/', (req, res) => {
res.render('authors/index')
})

//Single author route
router.get('/new', (req, res) => {
   res.render('authors/new')
})

// Creatrre authors route
router.post('/', (req, res) =>
{
   res.send('Create')
})




module.export = router;