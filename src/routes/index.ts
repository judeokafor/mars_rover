import express from 'express';

import { handleRequest } from '../controllers';


const router = express.Router();

router.post('/', handleRequest)

export default router;