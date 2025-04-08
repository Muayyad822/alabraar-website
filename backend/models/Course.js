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
    group: String,
    private: String
  },
  features: [String],
  curriculum: [{
    title: String,
    sections: [{
      title: String,
      content: String,
      duration: String,
      resources: [String]
    }]
  }],
  syllabus: [String],
  status: {
    type: String,
    enum: ['active', 'inactive', 'draft'],
    default: 'active'
  },
  thumbnail: {
    url: String,
    publicId: String
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Course', courseSchema);

