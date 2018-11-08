const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TituloSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    history: {
        type: []
    },
    day: {
        type: String
    },
    devotee: {
        type: Number,
        default: 0
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 11d4b2514be81ec0cfc33b0856eb319efa5619be
    imageUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

TituloSchema.plugin(mongoosePaginate);

mongoose.model('Titulo', TituloSchema);