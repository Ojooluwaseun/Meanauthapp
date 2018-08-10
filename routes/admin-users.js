import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config/database';
import adminUser from '../models/admin-user'

const router = express.Router(); 

router.post('/register', (req, res, next) => {
    let newadminUser = new adminUser(req.body);
    adminUser.addUser(newadminUser, (err, adminuser) => {
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

    adminUser.getUserByUsername(username, (err, adminuser) => {
        if(err) throw err;
        if(!adminuser){
            return res.json({success:false, msg: 'User not found'})
        }

        adminUser.comparePassword(password, adminuser.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(adminuser.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: adminuser._id,
                        name: adminuser.name,
                        username: adminuser.username,
                        email: adminuser.email,
                        isAdmin:adminuser.isAdmin
                    }
                })
            }
            else{
                return res.json({ success: false, msg: 'Wrong password'})
            }
        })
    })
});

router.route('/all').get((req, res) => {
    adminUser.find((err, adminUser) => {
        if (err){
            res.status(400).send("Failed to get users")
            console.log(err.message)}
        else
            res.json(adminUser);
    });
});

router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({user: req.user});
});


module.exports = router;