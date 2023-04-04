const Articles = require('../models/articleModel');

//*CONTROLLERS
const getAllArticlesAdmin = async (req,res) => {

    try {
        
        const articles = await Articles.find()

        if(!articles) {

            return res.status(400).json({
                ok:false,
                msg: 'Failed finding articles'
            })

        } else {
            
            return res.status(200).json({
                ok:true,
                msg: 'Capo, sacá la guita viste',
                articles
            })

        }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error retrieving articles",
        });       
}};

const getOneArticleAdmin = async (req, res) => {

    try {
        const id = req.params.id;
        const article = await Articles.findById(id);
        if (article) {
            return res.status(200).json({
                ok: true,
                msg: "Article successfully retrieved",
                data: article,
            });

        } else throw error 

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error retrieving the article",
        });
}};

const createArticleAdmin = async (req, res) => {

    const newArticle = new Articles({

        title: req.body.title,
        extract: req.body.extract,
        description: req.body.description,

    });

    try {
        
        await newArticle.save();

        return res.status(201).json({
            ok:true,
            msg: 'Creating Article successfully'
        })
        // return res.redirect('/admin/articles');

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error creating article",
        });
}};

const editArticleAdmin = async (req, res) => {

    try {

        const id = req.params.id;

        const title = req.body.title;
        const extract = req.body.extract;
        const description = req.body.description;

        const update = { 'title': title, 'extract': extract, 'description': description, };

        const newData = await Articles.findOneAndUpdate({ _id: id }, { $set: update });

        return res.status(200).json({
            ok: true,
            msg: 'Editing article successfully',
            data: newData
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error retrieving the movie",
        });
}};

const deleteArticle = async (req, res) => {

    try {

        const id = req.params.id;

        await Articles.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            msg: 'Deleting article successfully'
        })

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'FAILED deleting article - SERVER'
        });
}};

module.exports = {
    getAllArticlesAdmin,
    getOneArticleAdmin,
    createArticleAdmin,
    editArticleAdmin,
    deleteArticle
}