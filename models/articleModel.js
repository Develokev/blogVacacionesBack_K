const { Schema, model} = require('mongoose')

const ArticleSchema = new Schema ({

    title: {
        type: String,
        required: true,
        trim: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },

    extract: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    photo: {
        type:String,
    }
})

module.exports = model('Articles', ArticleSchema);