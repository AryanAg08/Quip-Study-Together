const authModel = require("../models/auth");

async function login(req, res, next)  {
    const {email, password} = req.body;

    try {
        const user = await authModel.findOne({email});

        if (!user) {
            
        }
    }
    catch (err) {
        console.log(err);
    }

    console.log(req.body)
}

async function signup(req, res, next) {
    console.log(req.body)
}

async function checkUserName(req, res, next) {
    const { username } = req.query;
    
    try {
        // Check if the username exists in the database
        const user = await authModel.findOne({ userName });
        if (user) {
            return res.status(200).json({ available: false, message: 'Username is already taken' });
        }
        return res.status(200).json({ available: true, message: 'Username is available' });
    } catch (error) {
        return res.status(500).json({ available: false, message: 'Error checking username', error });
    }
}


module.exports = {
    login,
    signup
}