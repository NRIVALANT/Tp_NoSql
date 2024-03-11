const express = require('express');
const router = express.Router();
const commentary = require('../controllers/commentary');
const cook = require('../controllers/cook')
const User = require('../controllers/user')

// Users routes
router.post('/addUser', User.createUser);
router.get('/getUsers', User.getUser);
router.put('/modifyUser/:id', User.modifyUser);
router.delete('/deleteUser/:id', User.deleteUser);

// Cook routes

router.post('/addCook', cook.createCook);
router.get('/getCook', cook.getCook);
router.put('/modifyCook/:id', cook.modifyCook);
router.delete('/deleteCook/:id', cook.deleteCook);

//Commentary routes

router.post('/addCommentary', commentary.createCommentary);
router.get('/getCommentary', commentary.getCommentary);
router.put('/modifyCommentary/:id', commentary.modifyCommentary);
router.delete('/deleteCommentary/:id', commentary.deleteCommentary);

module.exports = router;