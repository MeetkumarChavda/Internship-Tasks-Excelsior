import express from 'express';
import { createHero, createMarquee, deleteHero, deleteMarquee, getHero, getMarquee, updateHero, updateMarquee } from '../controller/adminController.js';
const routes = express.Router();


routes.post('/addHero', createHero);
routes.get('/getHero', getHero);
routes.delete('/deleteHero/:id', deleteHero);
routes.put('/updateHero/:id', updateHero);

// 
routes.post('/addMarquee', createMarquee);
routes.get('/getMarquee', getMarquee);
routes.delete('/deleteMarquee/:id', deleteMarquee);
routes.put('/updateMarquee/:id', updateMarquee);

export default routes;
