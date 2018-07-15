import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config/database';
import User from '../models/user'

const router = express.Router(); 

router.post('/register', (req, res, next) => {
    let newUser = new User(req.body);
    User.addUser(newUser, (err, user) => {
        if (err){
            res.json({success: false, msg:'Failed to add user'})
        }
        else{
            res.json({success: true, msg:'User added successfully'})
        }
    })
})
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'User not found'})
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            }
            else{
                return res.json({ success: false, msg: 'Wrong password'})
            }
        })
    })
});

router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({user: req.user});
});


module.exports = router;