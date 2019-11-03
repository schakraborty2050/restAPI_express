module.exports = (app) => {
    const users = require('../users/controllers/users.controller');
    app.post('/users', users.create);
    app.get('/users', users.findAll);
    app.get('/users/:noteId', users.findOne);
    app.put('/users/:noteId', users.update);
    app.delete('/users/:noteId', users.delete);
}
