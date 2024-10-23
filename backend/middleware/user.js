const userModel = require("../models/userDetails");
const jwt = require("jsonwebtoken");
async function dashboard(req, res, next) {
    console.log("User Getting Detials!!")
    const Id = req.query.id; 
    try {
        const userDetails = await userModel.findOne({Id});
        if (!userDetails) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        const data = {
            userName: userDetails.userName,
            email: userDetails.email,
            profilePictureLink: userDetails.profilePictureLink
        }
        res.status(200).json({
            data
        });
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }

}


async function IsUser (req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) { 
        return res.status(403).json({
            message: 'No token provided'
        });
    }
        jwt.verify(token, process.env.JWT, (err, user) => {
            if (err) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }

            req.user = user;
            next();
        })
        
    }
module.exports = {
    dashboard,
    IsUser
}