const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//All authors route
router.get('/', async (req, res) => {
   let searchOptions = {}
   if(req.query.search != null && req.query.search !== ''){
      searchOptions.name = new RegExp(req.query.search, 'i')
   }
   try {
      const authors = await Author.find(searchOptions)
      console.log(authors)
      res.render('authors/index', {
         authors: authors,
         searchOptions: req.query
      })
   } catch {
      res.render('/')
   }

})

//New author route
router.get('/new', (req, res) => {
   res.render('authors/new', { author: new Author() })
})

// Create authors route
router.post('/', async (req, res) =>
{
   const author = new Author({
      name: req.body.name
   })
   try {
      const newAuthor = await author.save()
      res.redirect(`authors`)
   } catch (error){
      console.log(error);
      res.render('authors/new', {
         author: author,
         errorMessage: 'Error creating author'
      })
   }

});


module.exports = router;