import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function serverRoutes(app) {
  const router = express.Router();
  const filePath = process.argv[2];

  app.use('/', router);

  router.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  router.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, filePath);
  });

  router.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, filePath);
  });
}

export default serverRoutes;
