import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';

import config from './config/database'
import users from './routes/users';

import University from './models/university';
import Career from './models/career';
import Course from './models/course';
import adminusers from './routes/admin-users';

var port = process.env.BACKEND_PORT || process.env.PORT || 3000;

//database connection
mongoose.connect(config.database);

//mongoose.Promise = global.Promise;

//const encodedPassword = encodeURIComponent('E2svUHaKTeOJatSK8FUJ0EOPOcI0Mf14j3o1ll0oz69JpNCNMXWvrWQjRUshzqBVxl7PaPMIqI5v5YvPD4ahAg==');
//const mongoUri = `mongodb://meanauth-app:${encodedPassword}@meanauth-app.documents.azure.com:10255/?ssl=true&replicaSet=globaldb`
//mongoose.connect(mongoUri);

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database')
})

//On Disconnection
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from database')
})

//On Error 
mongoose.connection.on('error', (err) => {
    console.log('Connection error: '+ err)
})

const app = express();
const router = express.Router();

app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', users);

app.use('/admin-users', adminusers);

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

//Univeristy APIs
router.route('/university/add').post((req, res) => {
    let university = new University(req.body);
    university.save()
        .then(university => {
            res.status(200).json({'university': 'Added successfully'})
            console.log(university)
        })
        .catch(err => {
            res.status(400).send("Failed to add university")
            console.log(err.message)
        });
});

router.route('/university/delete/:id').get((req, res) => {
    University.findByIdAndRemove({_id: req.params.id}, (err, university) => {
        if (!university){
            res.status(400).send('oops! university not found')
        }
        else if (err){
            res.status(400).send('Failed to remove university')
            console.log(err.message);
        }
        else
            res.json('Removed Successfully');
    })
})

router.route('/university').get((req, res) => {
    University.find((err, university) => {
        if (err){
            res.status(400).send("Failed to get universities")
            console.log(err.message)}
        else
            res.json(university);
    });
});

router.route('/university/:id').get((req, res) => {
    University.findById(req.params.id, (err, university) => {
        if(!university){
            res.status(400).send('oops! university not found')
        }
        else if (err){
            res.status(400).send('Error finding university')
            console.log(err.message)}
        else
            res.json(university);
    });
});


//Career APIs
router.route('/career/add').post((req, res) => {
    let career = new Career(req.body);
    career.save()
        .then(career => {
            res.status(200).json({'career': 'Added successfully'})
            console.log(career)
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).send("Failed to add career")
        });
        
});

router.route('/career/delete/:id').get((req, res) => {
    Career.findByIdAndRemove({_id: req.params.id}, (err, career) => {
        if(!career){
            res.status(400).send('oops! career not found')
        }
        else if (err){
            console.log(err);
            res.status(400).send("Failed to remove career")}
        else
            res.json('Career Removed Successfully');
    })
})

router.route('/career').get((req, res) => {
    Career.find((err, career) => {
        if (err){
            res.status(400).send('Failed to get careers')
            console.log(err);
        }
        else
            res.json(career);
    });
});

router.route('/career/:id').get((req, res) => {
    Career.findById(req.params.id, (err, career) => {
        if(!career){
            res.status(400).send('oops! career not found')
        }
        else if(err){
            res.status(400).send("Failed to get career")
            console.log(err.message);}
        else
            console.log("Career found!")
            res.json(career);
    });
});

router.route('/career/update/:id').post((req, res) => {
    Career.findById(req.params.id)
    .select("-skills")
    .exec(function(err, career){
        if(!career){
            res.status(400).send('oops! career not found')}
        else {
            career.name = req.body.name;

            career.save()
            .then(career => {
                res.json('Update done');
            })
            .catch(err => {
                res.status(400).send('Update failed')
                console.log(err.message);
            });
        }
    });
})

//Skill APIs
//Add skill to career
router.route('/career/:careerId/skill/add').post((req, res) => {
    Career.findById(req.params.careerId, (err, career) => {
        if(!career){
            res.status(400).send('oops! career not found')
        }
        if (req.body) {
           career.skills.push(req.body)}
        //career.markModified('skills')
        career.save()
        .then(career => {
            res.status(200).json({'skill': 'Added successfully'})
            console.log(req.body)
        })
        .catch(err => {
            res.status(400).send('Failed to add skill')
            console.log(err.message)
        });
        
    })

});

//get all skills by career
router.route('/career/:careerId/skill').get((req, res) => {
    Career.findById(req.params.careerId, (err, career) => {
        if(!career){
           res.status(400).send('oops! career not found')
        }
        else if (err){
           res.status(400).send('Failed to get skills')
           console.log(err);
        }
        else
            res.json(career.skills);
    });
});

//get a specific skill by career
router.route('/career/:careerId/skill/:skillId').get((req, res) => {
    Career.findById(req.params.careerId, (err, career) => {
        if(!career){
            res.status(400).send('oops! career not found')
        }
        var skill = career.skills.id(req.params.skillId)
        if(!skill){
            res.status(400).send('oops! skill not found')
        }
        else if (err){
            res.status(400).send('Failed to get skill')
            console.log(err);
        }
        else
            res.json(skill);
    });
});

//update a specific skill in a specific career
router.route('/career/:careerId/skill/update/:skillId').post((req, res) => {
    Career.findById(req.params.careerId, (err, career) => {
        if(!career){
            res.status(400).send('oops! career not found')}
        else {
            var skill = career.skills.id(req.params.skillId)
            if(!skill){
                res.status(400).send('oops! skill not found')}
            else{
                skill.name = req.body.name;}
            
            career.save()
            .then(career => {
                res.json('Update done');
            })
            .catch(err => {
                res.status(400).send('Update failed');
                console.log(err)
            });
        }
    });
})

//delete a specific skill from a specific career
router.route('/career/:careerId/skill/delete/:skillId').get((req, res) => {
   Career.findById(req.params.careerId, (err, career) => {
        if(!career){
            res.status(400).send('oops! career not found')}
        else {
            var skill = career.skills.id(req.params.skillId)
            if(!skill){
                res.status(400).send('oops! skill not found')}
            else{
                career.skills.id(req.params.skillId).remove()
                career.save()
                .then(career => {
                    res.json('skill deleted successfully');
                })
                .catch(err => {
                    res.status(400).send('Delete failed')
                    console.log(err)
                });
            }
        };
   })

})



//Course APIs
router.route('/course/add').post((req, res) => {
    let course = new Course(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'course': 'Added successfully'})
            console.log(course)
        })
        .catch(err => {
            res.status(400).send('Failed to create course')
            console.log(err)
        });
});

router.route('/course/delete/:id').get((req, res) => {
    Course.findByIdAndRemove({_id: req.params.id}, (err, course) => {
        if (!course){
            res.status(400).send('oops! course not found')
        }
        else if (err){
            res.status(400).send('Failed to remove course')
            console.log(err)}
        else
            res.json('Course Removed Successfully');
    })
})

router.route('/course').get((req, res) => {
    Course.find((err, course) => {
        if (err){
            res.status(400).send('Failed to get courses')
            console.log(err)}
        else
            res.json(course);
    });
});

router.route('/course/:id').get((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if (!course){
            res.status(400).send('oops! course not found')
        }
        else if (err){
            res.status(400).send('Failed to get course')
            console.log(err)}
        else
            res.json(course);
    });
});


app.use('/', router);

app.listen(port, () => console.log('Express server running on port ' + port));