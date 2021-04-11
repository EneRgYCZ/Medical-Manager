const mongoose = require('mongoose');

const pacientSchema = new mongoose.Schema({
    pacientId: {
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
        type: Option,
        required: true,
    },
    nrSAP: {
        type: String,
    }
    //To be continued @Bobo
})

mongoose.model('Pacient', pacientSchema);