import express from 'express';
import validate from '../helpers/validator';
import properties from '../controllers/propertiesController'
import users from '../controllers/usersController';

const { postValidate, 
        userSignUpValidate, 
        userSignInValidate } = validate;
const { userSignUp, 
        userSignIn } = users;
const {getAllProperties, 
       getPropertiesByType, 
       getProperty, 
       postProperty, 
       putProperty, 
       deleteProperty
} = properties;

const router = express.Router();


/*create account for user*/
router.post('/auth/signup', userSignUpValidate, userSignUp);

/*login route*/
router.post('/auth/signin', userSignInValidate, userSignIn);

/*search all properties*/
router.get('/properties', getAllProperties);

/*search one property*/
router.get('/property/:id', getProperty);

/* create a new property*/
router.post('/property', postValidate, postProperty);

/*update a property*/
router.patch('/property/:id', putProperty);

/*delete a property*/
router.delete('/property/:id', deleteProperty);

/*search all properties by type*/
router.get('/property', getPropertiesByType);


export default router;
