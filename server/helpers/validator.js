import { check } from 'express-validator';

const refactor1 = (a, b) => check(a)
  .not().isEmpty().withMessage(`${a} is required`)
  .isInt()
  .withMessage(`${a} must be a valid number`)
  .isLength({ min: 3 })
  .withMessage(b);

const refactor2 = (a, b) => check(a)
  .not().isEmpty().withMessage(`${a} is required`)
  .isLength({ min: 3 })
  .withMessage(`${a} should be ${b} characters or more`);

const postValidate = [
  check('owner', 'Owner should be set to a valid email').isEmail(),
  refactor1('price', 'not valid price amount'),
  check('state', 'Enter state and must be more than three characters').isLength({ min: 3 }),
  check('city', 'Enter city and must be more than 3 character').isLength({ min: 3 }),
  check('address', 'Enter Address and must be more than 5 chars').isLength({ min: 5 }),
  check('type', 'Enter type and must be a valid type').isLength({ min: 3 }),
];

const userSignUpValidate = [
  check('email', 'you must use a valid Email').isEmail(),
  refactor2('first_name', 3),
  refactor2('last_name', 3),
  refactor2('password', 5),
  refactor1('phoneNumber', 'Use 11 character for phone number'),
  refactor2('address', 5),
];

const userSignInValidate = [
  check('email', 'you must use a valid Email').isEmail(),
  refactor2('password', 5),
];


export default { postValidate, userSignUpValidate, userSignInValidate };
