const firebaseAuthController = require("../controllers/firebase-auth-controller");
const firestoreDatabaseController = require("../controllers/database-controller");

const verifyToken = require('../middleware');
const PostsController = require('../controllers/post-controller.js');

const express = require('express');
const router = express.Router();

router.get('/api/posts', verifyToken, PostsController.getPosts);
router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);

router.post('/api/set-user', firestoreDatabaseController.setUser);
router.get('/api/get-user', firestoreDatabaseController.getUser);

router.post('/api/send-friend-request', firestoreDatabaseController.sendFriendRequest)
router.get('/api/get-friends', firestoreDatabaseController.getFriends)
router.get('/api/get-friend-requests', firestoreDatabaseController.getFriendRequests)
router.post('/api/accept-friend', firestoreDatabaseController.acceptFriend)

router.post('/api/send-group-request', firestoreDatabaseController.sendGroupRequest)
router.post('/api/create-group', firestoreDatabaseController.createGroup)
router.get('/api/get-group-requests', firestoreDatabaseController.getGroupRequests)

module.exports = router;
