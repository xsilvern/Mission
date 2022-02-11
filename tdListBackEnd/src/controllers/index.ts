import express, { Router } from 'express';
import todoController from './tdList.controller';
const router = express.Router();

router.use('/todo', todoController);

export default router;