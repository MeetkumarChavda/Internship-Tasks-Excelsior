import { captcha, getAllUser, signup, verifyCaptcha } from "../controlers/auth.controler.js";
import express from 'express';

const router = express.Router();

router.post('/signup',verifyCaptcha,signup);
router.get('/users', getAllUser);
router.get('/captcha', captcha);
// router.post('/login',login)


export default router;