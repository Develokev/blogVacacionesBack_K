const { Schema, model} = require('mongoose')

const AdminSchema = new Schema ({

    name: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },
})

module.exports = model('Admin', AdminSchema);