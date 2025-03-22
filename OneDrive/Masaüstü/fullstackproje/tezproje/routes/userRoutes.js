// routes/userRoutes.js
import express from 'express';
import { newuserdatapost, userloginpost } from '../controllers/ClientCrudislemleri.js';
import { getuserdata } from '../controllers/ClientPanel.js';

const router = express.Router();

// Kullanıcı kaydı için route
router.post('/clientregister', newuserdatapost);

// Kullanıcı girişi için route
router.post('/login', userloginpost);

router.get('/data',getuserdata);

export default router;
