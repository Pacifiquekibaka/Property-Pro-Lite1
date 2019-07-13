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


/*route for create account for user*/
router.post('/auth/signup', userSignUpValidate, userSignUp);

/*route for login route*/
router.post('/auth/signin', userSignInValidate, userSignIn);

/*route for search all properties*/
router.get('/properties', getAllProperties);

/*route for search one property*/
router.get('/property/:id', getProperty);

/*route for create a new property*/
router.post('/property', postValidate, postProperty);

/*route for update a property*/
router.patch('/property/:id', putProperty);

/*route for delete a property*/
router.delete('/property/:id', deleteProperty);

/*route for search all properties by type*/
router.get('/property', getPropertiesByType);


export default router;
