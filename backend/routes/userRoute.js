import express from 'express'
import { Login, Logout, Register, bookmarks, follow, getMyProfile, getOtherUsers, unfollow } from '../controllers/userController.js';
import isAuthenticated from '../config/auth.js';

const router=express.Router();

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/logout').get(Logout)
router.route('/bookmarks/:id').put(isAuthenticated , bookmarks)
router.route('/profile/:id').get(isAuthenticated, getMyProfile)
router.route('/otherusers/:id').get(isAuthenticated, getOtherUsers)
router.route('/follow/:id').post(isAuthenticated,follow)
router.route('/unfollow/:id').post(isAuthenticated,unfollow)



export default router