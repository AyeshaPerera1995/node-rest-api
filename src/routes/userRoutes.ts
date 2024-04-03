import express from 'express';
import * as userController from '../controllers/UserController';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

export default router;