const { Router } = require('express');
const { usuariosGet, usuarioPost, usuarioPut, usuarioDelete } = require('../controllers/users.controller');
const router = Router();

router.get('/', usuariosGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/:id', usuarioDelete);

router.get('*', (req, res) => {
    res.send('404 | API no encontrada')
});

module.exports = router;