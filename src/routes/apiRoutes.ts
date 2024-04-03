import express from 'express';
import { helloWorld } from '../controllers/ApiController';

const router = express.Router();

router.get('/hello', helloWorld);

export default router;