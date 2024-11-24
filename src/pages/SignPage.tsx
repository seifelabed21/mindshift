import React from 'react';

const SignUpPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-sage-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-sage-900 text-center mb-6">Create Your Account</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sage-600 text-white py-3 rounded-lg hover:bg-sage-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-sage-600 hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
