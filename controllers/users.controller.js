const { response, request} = require('express');

const usuariosGet = (req = request, res = response ) => {
    res.json(
        {
            "Title": "GET USER"
        }
    );
}

const usuarioPost = (req = request, res = response ) => {

    const body = req.body;

    res.json(
        {
            "Title": "POST USER",
            body
        }
    );
}

const usuarioPut = (req = request, res = response ) => {

    const idHeader = req.params.id;

    res.json(
        {
            "Title": "PUT USER",
            idHeader
        }
    );
}

const usuarioDelete = (req = request, res = response ) => {

    const idHeader = req.params.id;

    res.json(
        {
            "Title": "DELETE USER"
        }
    );
}


module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}