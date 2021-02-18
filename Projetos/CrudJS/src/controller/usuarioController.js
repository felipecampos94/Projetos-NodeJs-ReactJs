const mongoose = require('mongoose');

//carrego o modelo de dados
const Usuario = mongoose.model('Usuario');


module.exports = {
    
    //cria a funcao de tela de insert
    //nela executa a funcao de insert no banco de dados
    //os dados sao passados no corpo da requisicao via post
    async insert (req, res) {
        const usuarios = await Usuario.create(req.body);

        return res.json(usuarios);
    },

    async index (req, res){
        const {page} = req.query;

        const usuarios = await Usuario.paginate({}, {page, limit:5});

        return res.json(usuarios);
    },

    async details (req, res){
        const usuarios = await Usuario.findById(req.params.id);
        return res.json(usuarios);
    },

    async update (req, res){
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(usuarios);
    },

    async delete (req, res){
        await Usuario.findByIdAndRemove(req.params.id);
        return res.send();
    }
};

