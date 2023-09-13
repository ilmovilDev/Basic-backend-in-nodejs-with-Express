/*
    '/api/auth'
 */

const { Router } = require('express');
const { register, login, revalidateToken } = require('../controllers/auth.controller');

const router = Router();

router.post('/register', register);

router.post('/login', login);

router.get('/renew', revalidateToken);

module.exports = router;