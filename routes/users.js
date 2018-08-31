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
            // res.json({success: false, msg:'Failed to add user'})
            // console.log(err)
            // Check if any validation errors exists (from user model)
            if (err.errors !== null) {
                if (err.errors.name) {
                    res.json({ success: false, message: err.errors.name.message }); // Display error in validation (name)
                } else if (err.errors.email) {
                    res.json({ success: false, message: err.errors.email.message }); // Display error in validation (email)
                } else if (err.errors.username) {
                    res.json({ success: false, message: err.errors.username.message }); // Display error in validation (username)
                } else if (err.errors.password) {
                    res.json({ success: false, message: err.errors.password.message }); // Display error in validation (password)
                } else {
                    res.json({ success: false, message: err }); // Display any other errors with validation
                }
            } else if (err) {
                // Check if duplication error exists
                if (err.code == 11000) {
                    if (err.errmsg[61] == "u") {
                        res.json({ success: false, message: 'That username is already taken' }); // Display error if username already taken
                    } else if (err.errmsg[61] == "e") {
                        res.json({ success: false, message: 'That e-mail is already taken' }); // Display error if e-mail already taken
                    }
                } else {
                    res.json({ success: false, message: err }); // Display any other error
                }
            }
        }
        else{
            res.json({success: true, msg:'User added successfully'})
        }
    })
})

// router.route('/:id').get((req, res) => {
//     User.findById(req.params.id, (err, user) => {
//         if (err)
//             console.log(err);
//         else
//             res.json(user);
//     });
// });

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .select("-password")
    .exec(function(err, user){
        if(!user){
            res.status(400).send('oops! user not found')}
        else {
            user.name = req.body.name;
            user.email = req.body.email;
            user.username = req.body.username;
            user.university = req.body.university;
            user.course = req.body.course;
            user.career = req.body.career;
            user.skills = req.body.skills;

            user.save()
            .then(user => {
                res.json('Update done');
            })
            .catch(err => {
                res.status(400).send('Update failed')
                console.log(err.message);
            });
        }
    });
})

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg: 'Oops! User not found'})
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
                        email: user.email,
                        isAdmin: user.isAdmin
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
    User.find((err, user) => {
        if (err){
            res.status(400).send("Failed to get users")
            console.log(err.message)}
        else
            res.json(user);
    });
});

router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({user: req.user});
});


module.exports = router;