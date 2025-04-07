import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required']
  },
  duration: {
    type: String,
    required: [true, 'Course duration is required']
  },
  pricing: {
    group: {
      type: Number,
      required: true
    },
    private: {
      type: Number,
      required: true
    }
  },
  features: [{
    type: String
  }],
  syllabus: [{
    type: String
  }],
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'draft'],
    default: 'active'
  }
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

export default Course;