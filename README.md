Build & Coverage status 

[![Build Status](https://travis-ci.org/Pacifiquekibaka/Property-Pro-Lite1.svg?branch=develop)](https://travis-ci.org/Pacifiquekibaka/Property-Pro-Lite1)[![Coverage Status](https://coveralls.io/repos/github/Pacifiquekibaka/Property-Pro-Lite1/badge.svg?branch=develop)](https://coveralls.io/github/Pacifiquekibaka/Property-Pro-Lite1?branch=develop)

Property-Pro-Lite

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

HOSTED UI template: https://pacifiquekibaka.github.io/Property-Pro-Lite1/UI/html/

Pivotal Project management tools: https://www.pivotaltracker.com/n/projects/2362276

Follow the following instructions to Get this project, open your terminal then write:

git clone https://github.com/Pacifiquekibaka/Property-Pro-Lite1.git

To run the API, Install the required dependencies found in package.json by running this command:

npm run install then 

npm start


Features
  
1.User can sign up.

2. User can sign in.

3. User (agent) can post a property advert.

4. User (agent) can update the details of a property advert.

5. User (agent) can mark his/her posted advert as sold.

6. User (agent) can delete a property advert.

7. User can view all properties adverts.

8. User can view all properties of a specific type - 2 bedroom, 3 bedroom, mini flat etc.

9. User can view a specific property advert

Optional Features

● User can reset password.

● flag/report a posted AD as fraudulent.

● User can add multiple pictures to a posted ad.

● The application should display a Google Map with Marker showing the red-flag or
intervention location.


THE END POINT OF THE PROJECT

| HTTP MEHOD  | ENDPOINTS                     | DESCRIPTIONS                    |
| :---        |    :----:                     |    ---:                         |
|  POST       | /api/v1/auth/signup           | Creating an account for user    |
|  POST       | /api/v1/auth/signin           | Login In                        |
|  GET        | /api/v1/properties            | Search all properties           | 
|  GET        | /api/v1/property/:id          | Search one property by Id       | 
|  POST       | /api/v1/property              | Post a new property             |                          
|  PATCH      | /api/v1/property/:id          | Update a property               |  
|  DELETE     | /api/v1/property/:id          | Delete a property               | 
|  GET        | /api/v1//property             | Search properties by type       |            
                 
Frontend

HTML
CSS and 
Javascript 

Backend

NodeJs
Express JS

Other Used Tools

Linter
ESLint - Linter Tool

Babel ,compiles ES6
            
-Developer:
Pacifique Kibaka
