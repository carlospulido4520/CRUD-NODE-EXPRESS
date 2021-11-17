const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuarioPost, usuarioPut, usuarioDelete } = require('../controllers/users.controller');

const { validField } = require('../middlewares/validate_fields');

const { isRoleValid, existEmail, existUserById } = require('../helpers/db_validators');


const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('email').custom(existEmail),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 caracteres').isLength({ min: 6 }),
    check('role').custom(isRoleValid),
    validField
], usuarioPost);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserById),
    check('role').custom(isRoleValid),
    validField
], usuarioPut);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserById),
    validField
], usuarioDelete);

module.exports = router;