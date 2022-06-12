import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    app.use(proxy("tweets/api", { target: "https://twippy-api.herokuapp.com/", changeOrigin: true, secure: false}));
};