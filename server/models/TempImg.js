const {Schema, model} = require('mongoose')

const tempImage = new Schema({
    nameFile: {
        type: String,
        required: true
    }, 
    key:{ 
        type: String,
        required: true
    }
})

const TempImage  = model('TempImage', tempImage)

module.exports = TempImage