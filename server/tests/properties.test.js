import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

const prop = {
  owner: 'pacifique@gmail.com',
  status: 'available',
  price:5800000,
  state: 'Rwanda',
  city: 'Kigali',
  address: 'Kn 12 Nyarutarama',
  type: 'Villa',
  /*image_url: ''*/
};

let propid;

describe('Properties route Test', () => {
  describe('GET /api/v1/properties', () => {
    it('should get/fetch all the property ads', async () => {
      const { status, res } = await chai.request(app)
        .get('/api/v1/properties')
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(200);
      expect(JSON.parse(res.text).status).to.eq('success');
      expect(JSON.parse(res.text).data).to.be.an('object');
      expect(JSON.parse(res.text).data.message).to.eq('All Properties successfully received');
      expect(JSON.parse(res.text).data.property).to.be.an('array');
    });
  });

  describe('GET /api/v1/properties/:id', () => {
    it('should get a specific property ad', async () => {
      const { status, res } = await chai.request(app)
        .get('/api/v1/property/1')
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(200);
      expect(JSON.parse(res.text).status).to.eq('success');
      expect(JSON.parse(res.text).data).to.be.an('object');
      expect(JSON.parse(res.text).data.message).to.eq('Property successfully received');
      expect(JSON.parse(res.text).data.data).to.be.an('object');
    });
    it('should throw an error on invalid id of specific property ad', async () => {
      const { status, res } = await chai.request(app)
        .get('/api/v1/property/invalidId')
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(400);
      expect(JSON.parse(res.text).status).to.eq('error');
      expect(JSON.parse(res.text).error).to.eq('Invalid ID');
    });
  });

  describe('POST /api/v1/property/ route', () => {
    it('should create a new property ad', async () => {
      const { status, res } = await chai.request(app)
        .post('/api/v1/property/')
        .set('content-type', 'application/json')
        .send(prop);
      // console.log(status, res.text);
      expect(status).to.eq(201);
      expect(JSON.parse(res.text).status).to.eq('success');
      expect(JSON.parse(res.text).data).to.be.an('object');
      expect(JSON.parse(res.text).data.newProperty.price).to.eq(1000);
      propid = JSON.parse(res.text).data.newProperty.id;
    });
  });

  describe('PATCH /api/v1/property/:id route', () => {
    it('should update an existing property ad', async () => {
      const { status, res } = await chai.request(app)
        .patch(`/api/v1/property/${propid}`)
        .set('content-type', 'application/json')
        .send({ price: 54000, state: 'Rwanda', city: 'Kicukiro' });
      expect(status).to.eq(201);
      expect(JSON.parse(res.text).status).to.eq('success');
      expect(JSON.parse(res.text).data).to.be.an('object');
      expect(JSON.parse(res.text).data.updatedProperty.price).to.eq(54000);
      expect(JSON.parse(res.text).data.updatedProperty.state).to.eql('Rwanda');
      expect(JSON.parse(res.text).data.updatedProperty.city).to.eql('Kicukiro');
    });
    it('should throw error on invalid id', async () => {
      const { status, res } = await chai.request(app)
        .patch('/api/v1/property/invalid_id')
        .set('content-type', 'application/json')
        .send({ price: 54000, state: 'Rwanda', city: 'Kicukiro' });
      expect(status).to.eq(400);
      expect(JSON.parse(res.text).status).to.eq('error');
      expect(JSON.parse(res.text).error).to.eq('Property ad not found');
    });
  });

  describe('DELETE /api/v1/property/:id route', () => {
    it('should delete an existing property ad', async () => {
      const { status, res } = await chai.request(app)
        .delete(`/api/v1/property/${propid}`)
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(200);
      expect(JSON.parse(res.text).status).to.eq('success');
      expect(JSON.parse(res.text).message).to.eq('Property ad deleted successfully');
    });
    it('should throw error on invalid id', async () => {
      const { status, res } = await chai.request(app)
        .delete('/api/v1/property/invalid_id')
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(400);
      expect(JSON.parse(res.text).status).to.eq('error');
      expect(JSON.parse(res.text).error).to.eq('Property ad not found');
    });
  });

  describe('GET /api/v1/properties', () => {
    it('should get/fetch all the property ads of a specific type', async () => {
      const { status, res } = await chai.request(app)
        .get('/api/v1/property?type=2+bedroom')
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(200);
      expect(JSON.parse(res.text).status).to.eq('success');
      expect(JSON.parse(res.text).data).to.be.an('object');
      expect(JSON.parse(res.text).data.message).to.eq('Property successfully retrieved');
      expect(JSON.parse(res.text).data.data).to.be.an('object');
    });
    it('should throw an error on invalid type', async () => {
      const { status, res } = await chai.request(app)
        .get('/api/v1/property?type=asdf')
        .set('content-type', 'application/json')
        .send();
      expect(status).to.eq(400);
      expect(JSON.parse(res.text).status).to.eq('error');
      expect(JSON.parse(res.text).error).to.eq('Invalid type');
    });
  });
});
