import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function AuthModal({ isOpen, onClose, onSuccess, selectedCourse }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Login to continue enrollment' : 'Sign up to start your journey'}
          </p>
        </div>

        {isLogin ? (
          <Login onSuccess={onSuccess} selectedCourse={selectedCourse} />
        ) : (
          <SignUp onSuccess={onSuccess} selectedCourse={selectedCourse} />
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-800"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}