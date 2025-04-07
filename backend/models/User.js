import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false // Don't include password in queries by default
  },
  role: {
    type: String,
    enum: ['student', 'admin', 'teacher'],
    default: 'student'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  profile: {
    phone: String,
    address: String,
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['male', 'female', 'other']
    }
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
}, {
  timestamps: true
});

// Add any pre-save hooks or methods here
userSchema.pre('save', function(next) {
  // Add password hashing or other pre-save operations here
  next();
});

const User = mongoose.model('User', userSchema);

export default User;