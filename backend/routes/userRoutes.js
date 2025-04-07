import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { 
  getUserProfile,
  updateUserProfile,
  updatePassword
} from '../controllers/userController.js';

const router = express.Router();

router.use(protect); // Protect all routes

router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);
router.put('/password', updatePassword);

export default router;
