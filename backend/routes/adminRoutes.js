import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';
import { 
    getUsers, 
    updateUserRole, 
    updateUserStatus, 
    deleteUser, 
    updateSettings, 
    getSettings 
} from '../controllers/adminController.js';

const router = express.Router();

// Protect all admin routes
router.use(protect);
router.use(authorize(['admin'])); // Replace admin middleware with authorize middleware

// User management routes
router.get('/users', getUsers);
router.patch('/users/:id/role', updateUserRole);
router.patch('/users/:id/status', updateUserStatus);
router.delete('/users/:id', deleteUser);

// Settings routes
router.get('/settings', getSettings);
router.put('/settings', updateSettings);

export default router;



