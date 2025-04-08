import express from 'express';
import { signup, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/verify', protect, (req, res) => {
  res.json({ 
    success: true, 
    user: {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

router.post('/signup', signup);
router.post('/login', login);

export default router;

