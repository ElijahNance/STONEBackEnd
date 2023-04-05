const {Schema, model} = require('mongoose');


const staySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    streetAdress: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    mainImageURI: {
        type: String,
        required: true
    },
    propertyImages: {
        type: Array,
        required: true
    },
    stayPrice: {
        type: Number,
        required: true
    },
    propertyAmenities: {
        type: Array,
        required: true
    },
    avaliableDates: {
        type: Array
    }
})

const Stay = model('Stay', staySchema);
module.exports = Stay;