import database from '../models/database';
import helpers from '../helpers/propertyHelper';
import getProps from '../helpers/getProperty';
import cloudinary from '../helpers/cloudinary';
import errorHelpers from '../helpers/errorHelper';

const { saveNewProperty, 
        updateProperty, 
        deletesProperty } = helpers;
const { property } = database;
const imageUpload = cloudinary;
const { inputError } = errorHelpers;


/**
 * check if the property id is correct
 * @param  {Object} req the request object
 * @return  {Function} calls the next middleware if test passes
 */
const checkProperty = req => property.find(prop => prop.id === parseInt(req, 10));
const checkPropertyType = req => property.find(prop => prop.type === req);


/**
 * Get all properties.
 * @param {object} req the request object.
 * @param {object} res the response object.
 * @return  {Function} next calls the next middleware
 *
*/

const getAllProperties = (req, res) => res.status(200).send({
  status: 'success',
  data: {
    message: 'Properties successfully received',
    property,
  }
});

/**
 * Get all properties of a certain type, e.g 2 bedroom.
 * @param {object} req the request object.
 * @param {object} res the response object.
 * @return  {Function} next calls the next middleware
 *
*/

const getPropertiesByType = (req, res) => {
  getProps(checkPropertyType(req.query.type), res, 'Invalid type');
};

/**
 * Get a specific property.
 * @param {object} req the request object.
 * @param {object} res the response object.
 * @return  {Function} next calls the next middleware
 *
*/

const getProperty = (req, res) => {
  getProps(checkProperty(req.params.id), res, 'Invalid ID');
};

/**
 * Create/POST a property ad.
 * @param {object} req the request object.
 * @param {object} res the response object.
 * @return  {Function} next calls the next middleware
 *
*/

const postProperty = async (req, res) => {
  const {
    owner, price, state, city, address, type, image_url
  } = req.body;
  inputError(req, res);
  const image_uri = imageUpload(image_url);

  const newProperty = await saveNewProperty(
    owner, price, state, city, address, type, image_uri
  );
  return res.status(201).send({
    status: 'success',
    data: {
      newProperty: newProperty[newProperty.length - 1],
    }
  });
};

/**
 * Update property data.
 * @param {object} req the request object.
 * @param {object} res the response object.
 * @return  {Function} next calls the next middleware
 *
*/

const putProperty = (req, res) => {
  const data = checkProperty(req.params.id);
  if (data !== undefined) {
    const {
      owner, status, price, state, city, address, type, image_url
    } = req.body;

    const updatedProperty = updateProperty(
      data.id, owner, status, price, state,
      city, address, type, image_url
    );
    return res.status(201).send({
      status: 'success',
      data: {
        message: 'Property updated successfully',
        updatedProperty
      }
    });
  }
  return res.status(400).send({
    status: 'error',
    error: 'Property ad not found',
  });
};

/**
 * Delete a property ad.
 * @param {object} req the request object.
 * @param {object} res the response object.
 * @return  {Function} next calls the next middleware
 *
*/

const deleteProperty = async (req, res) => {
  const data = await checkProperty(req.params.id);
  if (data !== undefined) {
    // console.log(data.id);
    await deletesProperty(data.id);
    return res.status(200).send({
      status: 'success',
      message: 'Property ad deleted successfully',
    });
  }
  return res.status(400).send({
    status: 'error',
    error: 'Property ad not found',
  });
};


export default {
  getAllProperties, 
  getPropertiesByType, 
  getProperty, 
  postProperty, 
  putProperty, 
  deleteProperty
};
