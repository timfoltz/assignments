const ProjectController = require('../controllers/project.controller');

module.exports = function(app){
    app.get('/api', ProjectController.index);
    app.post('/api/project', ProjectController.createProject);
    app.get('/api/viewall/projects', ProjectController.findAllProjects);
    app.put('/api/view/update/:id', ProjectController.updateProject);
    app.delete('/api/view/delete/:id', ProjectController.deleteProject);
    app.get('/api/view/:id', ProjectController.findOneProject);

}