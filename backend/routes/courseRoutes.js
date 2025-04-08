import express from 'express';
import multer from 'multer';
import { protect, authorize } from '../middleware/authMiddleware.js';
import {
  getCourses,
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollInCourse,
  uploadImage,
  updateCourseStatus
} from '../controllers/courseController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Public routes
router.get('/', getCourses);

// Protected routes - apply protect middleware
router.use(protect);

// Admin only routes
router.get('/all', protect, authorize(['admin']), getAllCourses);
router.post('/', protect, authorize(['admin']), createCourse);
router.post('/upload', protect, authorize(['admin']), upload.single('image'), uploadImage);

// Protected routes with parameters
router.get('/:id', getCourseById);
router.put('/:id', protect, authorize(['admin']), updateCourse);
router.delete('/:id', protect, authorize(['admin']), deleteCourse);
router.patch('/:id/status', protect, authorize(['admin']), updateCourseStatus);
router.post('/:id/enroll', enrollInCourse);

export default router;



