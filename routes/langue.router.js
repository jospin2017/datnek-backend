const langueController = require('../Controllers/langue.controller');


module.exports = (app)=>{

    app.get('/api/langues',langueController.getAllLangages);
    app.get('/api/langue/:id',langueController.getLangageById);
    app.post('/api/langue',langueController.createLangage);
    app.put('/api/langue/:id',langueController.updateLanguage);
    app.delete('/api/langue/:id',langueController.deleteLangage);
}