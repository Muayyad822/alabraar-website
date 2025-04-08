import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    default: 'Al-Abraar Foundation'
  },
  contactEmail: String,
  phoneNumber: String,
  address: String,
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String
  },
  admissionSettings: {
    isOpen: {
      type: Boolean,
      default: true
    },
    deadline: Date
  }
}, {
  timestamps: true
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;