const { Schema, model } = require('mongoose');

const guestSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    guestFirstName: {
        type: String,
        required: true,
    },
    guestMiddleName: {
        type: String
    },
    guestLastName: {
        type: String,
        required: true
    },
    guestPhone: {
        type: String,
        required: true
    },
    guestEmail: {
        type: String,
        required: true
    }
});

const Guest = model('Guest', guestSchema);
module.exports = Guest;