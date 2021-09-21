import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    const headers = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/tweets", { target: "https://twippy-api.azurewebsites.net", changeOrigin: true, secure: false, headers: headers }));
};