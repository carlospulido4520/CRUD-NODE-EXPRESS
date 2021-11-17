const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async (rol = '') => {
    const existRole = await Role.findOne({ rol });
    if (!existRole) {
        throw new Error('No es un rol permitido')
    }
}

const existEmail = async (email = '') => {
    const existEmailinDB = await User.findOne({ email });
    if (existEmailinDB) {
        throw new Error(`El correo: ${email}, ya existe.`)
    }
}

const existUserById = async (id) => {

    const existUserInDB = await User.findById(id);
    if (!existUserInDB) {
        throw new Error('El ID no existe')
    }
}


module.exports = {
    isRoleValid,
    existEmail,
    existUserById
}