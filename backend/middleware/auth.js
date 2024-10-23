const authModel = require("../models/auth");
const userModel = require("../models/userDetails");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("node:crypto")
async function login(req, res, next)  {
    console.log("New login Req!!")
    const {email, password} = req.body;
         try {
            console.log(req.body)
        if (!email || !password) res.status(400).json('Missing Fields');
        else {
           const Email = email.toLowerCase();
            const user = await authModel.findOne({email :Email});
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({id: user._id}, `${process.env.JWT}`, {expiresIn: '12h'});
                res.status(200).json({
                    user, token
                });
            }
            else {
                res.status(400).json('Invalid Credentials');
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function signup(req, res, next) {
    const { userName, email, password, education, usage, workType, currentGoals } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = `${userName}-${email}`;
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    const randomNum = Math.floor(Math.random() * 1000);
    const Id = `${hash}${randomNum}`
    const newUser = new authModel({
        Id,
        userName,
        email,
        password: hashedPassword,
        education,
        usage,
        workType,
        currentGoals,
    });
    try {
        const user = await newUser.save().then(async () => {
            await userModel.findOneAndUpdate({
                Id,
            },{
                Id,
                email,
                userName,
                profilePictureLink: "Basic"
            },{
                upsert: true,
                new: true,
            });
            res.status(200).json({
                user,
                Id
            });
        })        
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }

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
    signup,
    checkUserName,
}