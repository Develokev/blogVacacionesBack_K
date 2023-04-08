const express = require("express");
const router = express.Router();

const {validateInputs} = require('../middlewares/inputValidator');
const { getAllArticlesAdmin, getOneArticleAdmin, createArticleAdmin, deleteArticle, editArticleAdmin, searchEntries } = require('../controllers/apiControllers');

//*Routers

//++++++++++Search
router.get('/articles/search/', searchEntries);

//++++++++++General
router.get('/articles', getAllArticlesAdmin);

router.get('/articles/:id', getOneArticleAdmin);

router.post('/articles/', createArticleAdmin);

router.put('/articles/:id', editArticleAdmin);

router.delete('/articles/:id', deleteArticle);



module.exports = router;