const express = require("express");
const router = express.Router();

const {validateInputs} = require('../middlewares/inputValidator');
const { getAllArticlesAdmin, getOneArticleAdmin, createArticleAdmin, deleteArticle, editArticleAdmin } = require('../controllers/apiControllers');

//*Routers
router.get('/articles', getAllArticlesAdmin);

router.get('/articles/:id', getOneArticleAdmin);

router.post('/articles/create-article', createArticleAdmin);

router.put('/articles/edit-article/:id', editArticleAdmin);

router.get('/articles/remove-article/:id', deleteArticle);

module.exports = router;