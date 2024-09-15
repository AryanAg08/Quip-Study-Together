async function login(req, res, next)  {

    console.log(req.body)
}

async function signup(req, res, next) {
    console.log(req.body)
}


module.exports = {
    login,
    signup
}