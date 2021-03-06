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
    },
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