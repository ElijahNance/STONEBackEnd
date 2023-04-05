const { Schema, model } = require('mongoose');
const Stay = require('./Stay');
const Guest = require('./Guest');


const bookingSchema = new Schema({
    stayDate: {
        type: Date,
        required: true
    },
    propertyId: {
            type: Schema.Types.ObjectId, ref: Stay
        
    },
    guestId: {
        type: Schema.Types.ObjectId, ref: Guest
    }
});

const Booking = model('Booking', bookingSchema);
module.exports = Booking;