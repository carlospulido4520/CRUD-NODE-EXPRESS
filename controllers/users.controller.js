const { response, request } = require('express');
const User = require('../models/user');

const bcrypt = require('bcryptjs');


const usuariosGet = async (req = request, res = response) => {
    const users = await User.find();
    res.json(users);
}

const usuarioPost = async (req = request, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json(user);
}

const usuarioPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, password, google, ...user } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
    }

    const userDB = await User.findByIdAndUpdate(id, user, { new: true });

    res.json(userDB);
}

const usuarioDelete = async (req = request, res = response) => {

    const { id } = req.params;
    const userDB = await User.findByIdAndUpdate(id, { status: false }, { new: true });

    res.json(userDB)
}


module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}