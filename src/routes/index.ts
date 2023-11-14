import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as searchController from '../controllers/searchController';
import * as pageController from '../controllers/pageController';
import * as newUserController from '../controllers/newUserController';
import * as editController from '../controllers/editController';
import * as deleteController from '../controllers/deleteController';

const router = Router();

router.get('/', HomeController.home);
router.get('/search', searchController.search);
router.get('/page/:id', pageController.page);
router.post('/newUser', newUserController.newUser);
router.get('/edit/:id', editController.edit);
router.post('/updateUser', editController.editUser);
router.get('/delete/:id', deleteController.deleteUser);

export default router;