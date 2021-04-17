const mongoose = require('mongoose');

const pacientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fullName: {
        type: String,
        required: true,
    },
    dateOfReport: {
        type: Date,
        required: true,
    },
    clinicPetromed: {
        type: String,
        required: true,
    },
    nrSAP: {
        type: String,
    }
    //To be continued @Bobo
})

mongoose.model('Pacient', pacientSchema);