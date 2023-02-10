import { expect, server, BASE_URL } from './setup.js';

describe('Index page test', () => {
  it('gets base url', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming across'
        );
        done();
      });
  });
});

describe('Test page test', () => {
  it('gets test page result', done => {
    server
      .get(`${BASE_URL}/test`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'about this'
        );
        done();
      });
  });
});
