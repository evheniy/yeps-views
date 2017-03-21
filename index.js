const debug = require('debug')('yeps:views');
const { resolve } = require('path');
const consolidate = require('consolidate');



module.exports = (viewsPath, { engine = 'react', options = {}} = {}) => async context => {

    debug('View created!');
    debug('viewsPath: %s', viewsPath);
    debug('engine: %s', engine);
    debug(options);

    context.renderToString = async (path, parameters) => {

        debug('renderToString');
        debug('path: %s', path);
        debug(parameters);

        if (!consolidate[engine]) {
            debug('Wrong engine: %s', engine);
            throw new Error(`Wrong engine: ${engine}`);
        }

        const html = await consolidate[engine](resolve(viewsPath, path), Object.assign({}, options, parameters));

        debug(html);

        return html;
    };

    context.render = async (path, parameters) => {

        debug('render');
        debug('path: %s', path);
        debug(parameters);

        context.statusCode = 200;
        context.res.end(await context.renderToString(path, parameters));

        return Promise.resolve();
    };
};
