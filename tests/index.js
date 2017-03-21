const App = require('yeps');
const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const { resolve } = require('path');
const views = require('..');
const expect = chai.expect;

chai.use(chaiHttp);
let app;

describe('YEPS views test', async () => {

    beforeEach(() => {
        app = new App();
    });

    it('should test default react template', async () => {
        let isTestFinished1 = false;
        let isTestFinished2 = false;

        app.then(views(resolve(__dirname, 'views')));

        app.then(async ctx => {
            isTestFinished1 = true;

            return ctx.render('react.jsx', { text: 'test' });
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.text).to.be.equal('<h1>test</h1>');
                isTestFinished2 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
    });

    it('should test wrong engine', async () => {
        let isTestFinished1 = false;
        let isTestFinished2 = false;

        app.then(views(resolve(__dirname, 'views'), { engine: 'test' }));

        app.then(async ctx => {
            isTestFinished1 = true;

            return ctx.render('test.test', { text: 'test' });
        });

        app.catch(async (err, ctx) => {
            ctx.res.statusCode = 500;
            ctx.res.end(err.message);
        });

        await chai.request(http.createServer(app.resolve()))
            .get('/')
            .send()
            .catch(err => {
                expect(err).to.have.status(500);
                expect(err.response.text).to.be.equal('Wrong engine: test');
                isTestFinished2 = true;
            });

        expect(isTestFinished1).is.true;
        expect(isTestFinished2).is.true;
    });

});
