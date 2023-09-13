const { response } = require('express');

const register = (req, res = response) => {

    const { name, email, password } = req.body;

    res.json({
        msg: 'register - controller',
        name, email, password
    });

}

const login = (req, res = response) => {

    const { email, password } = req.body;

    res.json({
        msg: 'login - controller',
        email, password
    });

}

const revalidateToken = (req, res = response) => {

    res.json({
        msg: 'revalidateToken - controller'
    });

}

module.exports = {
    register,
    login,
    revalidateToken
}

