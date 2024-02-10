import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha'; // Importing describe and it from Mocha
import server from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('Demo test', function () {
  it('should demo test', async () => {
    const res = await chai.request(server).get('/demo'); // Using chai.request to make HTTP request
    expect(res).to.have.status(200);
  });
});
