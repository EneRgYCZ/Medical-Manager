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
        type: String,
        required: true,
    },
    clinicPetromed: {
        type: String,
        required: true,
    },
    nrSAP: {
        type: String,
    },
    expire_at: {
        type: Date, 
        expireAfterSeconds: 1209600, //1209600 seconds = 14 days (#FACT)
    },//Expiration statement (14 days)
    avatarPhoto: {
        type: String,
        default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkma.ujep.cz%2Fstyle%2Fimages%2Fuser_avatar.png&f=1&nofb=1',
        required: false,
    }
    //To be continued @Bobo
})


mongoose.model('Pacient', pacientSchema);