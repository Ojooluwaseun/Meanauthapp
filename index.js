import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';

import config from './config/database'
import users from './routes/users';

import University from './models/university';
import Career from './models/course';
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
            res.status(400).send('Failed to create new record')
        });
});

router.route('/university/delete/:id').get((req, res) => {
    University.findByIdAndRemove({_id: req.params.id}, (err, university) => {
        if (err)
            res.json(err);
        else
            res.json('Removed Successfully');
    })
})

router.route('/university').get((req, res) => {
    University.find((err, university) => {
        if (err)
            console.log(err);
        else
            res.json(university);
    });
});

router.route('/university/:id').get((req, res) => {
    University.findById(req.params.id, (err, university) => {
        if (err)
            console.log(err);
        else
            res.json(university);
    });
});


//Course APIs
router.route('/course/add').post((req, res) => {
    let course = new Course(req.body);
    course.save()
        .then(course => {
            res.status(200).json({'course': 'Added successfully'})
            console.log(course)
        })
        .catch(err => {
            res.status(400).send('Failed to create new record')
        });
        
});

router.route('/course/delete/:id').get((req, res) => {
    Course.findByIdAndRemove({_id: req.params.id}, (err, course) => {
        if (err)
            res.json(err);
        else
            res.json('Removed Successfully');
    })
})

router.route('/course').get((req, res) => {
    Course.find((err, course) => {
        if (err)
            console.log(err);
        else
            res.json(course);
    });
});

router.route('/course/:id').get((req, res) => {
    Course.findById(req.params.id, (err, course) => {
        if(!course){
            res.statusCode = 404
            res.statusMessage = "Course not found!"
        }
        else if(err){
            console.log("Error finding course!")
            res.statusCode = 500
            res.statusMessage = err
        }
        else
            console.log("Course found!")
            res.json(course);
    });
});

//Career API
//Add career to course
router.route('/course/:courseId/career/add').post((req, res) => {
    Course.findById(req.params.courseId, (err, course) => {
        if (req.body) {
           course.careers.push(req.body)}
        course.markModified('careers')
        course.save()
        .then(course => {
            res.status(200).json({'career': 'Added successfully'})
            console.log(course)
        })
        .catch(err => {
            res.status(400).send('Failed to add career')
        });
        
    })

});

//get all careers by course
router.route('/course/:courseId/careers').get((req, res) => {
    Course.findById(req.params.courseId, (err, course) => {
        if (err)
            console.log(err);
        else
            res.json(course.careers);
    });
});

//get a specific career by course
router.route('/course/:courseId/careers/:careerId').get((req, res) => {
    Course.findById(req.params.courseId, (err, course) => {
        var career = course.careers.id(req.params.careerId)
        if (err)
            console.log(err);
        else
            res.json(career);
    });
});

//delete a specific career from a specific course
router.route('course/:courseId/careers/delete/:careerId').get((req, res) => {
    Course.findById(req.params.courseId, (err, course) => {
    //course.careers.findByIdAndRemove({_id: req.params.careerId}, (err, career) => {
    //   if (err)
    //        res.json(err);
    //    else
    //        res.json('Removed Successfully');
    //})
    //})
    // Equivalent to `parent.children.pull(_id)`
    console.log(course)
    course.careers.pull(_id)
    course.save(function (err) {
        if (err) res.json(err);
        console.log('career were removed')
    })
});
})



//Skill APIs
router.route('/skill/add').post((req, res) => {
    let skill = new Skill(req.body);
    skill.save()
        .then(skill => {
            res.status(200).json({'skill': 'Added successfully'})
            console.log(skill)
        })
        .catch(err => {
            res.status(400).send('Failed to create new record')
        });
});
router.route('/skill/delete/:id').get((req, res) => {
    Skill.findByIdAndRemove({_id: req.params.id}, (err, skill) => {
        if (err)
            res.json(err);
        else
            res.json('Removed Successfully');
    })
})

router.route('/skill').get((req, res) => {
    Skill.find((err, skill) => {
        if (err)
            console.log(err);
        else
            res.json(skill);
    });
});

router.route('/skill/:id').get((req, res) => {
    Skill.findById(req.params.id, (err, skill) => {
        if (err)
            console.log(err);
        else
            res.json(skill);
    });
});


app.use('/', router);

app.listen(port, () => console.log('Express server running on port ' + port));