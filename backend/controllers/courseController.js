import cloudinary from '../config/cloudinary.js';
import Course from '../models/Course.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

// Upload course image
export const uploadImage = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ 
        success: false,
        message: 'User not authenticated' 
      });
    }

    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'No image file provided' 
      });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'course-thumbnails',
      resource_type: 'auto',
      transformation: [
        { width: 800, height: 600, crop: 'limit' },
        { quality: 'auto' }
      ]
    });

    res.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error uploading image',
      error: error.message 
    });
  }
};

// Get all courses (including drafts and inactive - for admin use)
export const getAllCourses = async (req, res) => {
  try {
    // Authorization check is now handled by middleware
    const courses = await Course.find()
      .populate('instructor', 'name email')
      .select('-enrolledStudents')
      .lean();

    res.status(200).json({
      success: true,
      data: courses
    });
  } catch (error) {
    console.error('Error in getAllCourses:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching courses'
    });
  }
};

// Get public courses (active only)
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ status: 'active' })
      .populate('instructor', 'name email')
      .select('-enrolledStudents');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single course
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create course
export const createCourse = async (req, res) => {
  try {
    // Log the incoming request body
    console.log('Creating course with data:', req.body);

    // Validate required fields
    const requiredFields = ['title', 'description', 'duration'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    const course = new Course({
      ...req.body,
      instructor: req.user._id,
      status: req.body.status || 'active'
    });

    const savedCourse = await course.save();
    console.log('Course created successfully:', savedCourse);

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(400).json({ 
      message: 'Failed to create course',
      error: error.message 
    });
  }
};

// Update course
export const updateCourse = async (req, res) => {
  try {
    console.log('Updating course with ID:', req.params.id);
    console.log('Update data:', req.body);

    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    // Check if the user is authorized to update the course
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this course' });
    }

    // If updating thumbnail and old thumbnail exists, delete it from cloudinary
    if (req.body.thumbnail && course.thumbnail?.publicId && 
        req.body.thumbnail.publicId !== course.thumbnail.publicId) {
      await cloudinary.uploader.destroy(course.thumbnail.publicId);
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    console.log('Course updated successfully:', updatedCourse);
    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(400).json({ 
      message: 'Failed to update course',
      error: error.message 
    });
  }
};

// Enroll in course
export const enrollInCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user is already enrolled
    if (course.enrolledStudents.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    course.enrolledStudents.push(req.user._id);
    await course.save();

    res.json({ message: 'Successfully enrolled in course' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await course.deleteOne();
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update course status
export const updateCourseStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['active', 'inactive', 'draft'].includes(status)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid status' 
      });
    }

    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ 
        success: false,
        message: 'Course not found' 
      });
    }

    // Check authorization
    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ 
        success: false,
        message: 'Not authorized to update this course' 
      });
    }

    course.status = status;
    await course.save();

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};



