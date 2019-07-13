const getProps = (data, res, errMsg) => {
  if (data !== undefined) {
    return res.status(200).send({
      status: 200,
      data: {
        message: 'Property successfully retrieved',
        data
      }
    });
  }
  return res.status(400).send({
    status: 400,
    error: errMsg,
  });
};

export default getProps;
