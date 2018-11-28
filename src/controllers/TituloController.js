const mongoose = require('mongoose');

const Titulo = mongoose.model('Titulo');

module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query;

            const titulos = await Titulo.paginate({}, { page, limit: 10 });

            return res.status(200).json(titulos);
        } catch (err) {
            return res.status(400).send('Houve um erro ao recuperar os títulos.', err);
        }
    },

    async show(req, res) {
        try {
            const titulo = await Titulo.findById(req.params.id);

            return res.status(200).json(titulo);
        } catch(err) {
            return res.status(400).send('Houve um erro ao recuperar o título.', err);
        }
    },

    async add(req, res) {
        try {
            const titulo = await Titulo.create(req.body);

            return res.status(200).json(titulo);
        } catch(err) {
            return res.status(400).send('Houve um erro ao cadastrar o título.', err);
        }
    },

    async update(req, res) {
        try {
            const titulo = await Titulo.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.status(200).json(titulo);
        } catch(err) {
            return res.status(400).send('Houve um erro ao atualizar o título.', err);
        }
    },

    async destroy(req, res) {
        try {
            await Titulo.findByIdAndRemove(req.params.id);

            return res.status(200).send();
        } catch(err) {
            return res.status(400).send('Houve um erro ao remover o título.', err);
        }
    }
};