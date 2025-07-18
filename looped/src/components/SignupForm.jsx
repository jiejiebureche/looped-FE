import React from 'react';
import LoopedLogo from '../assets/looped.svg?react';
import bgImage from '../assets/bg.jpg';

const Signup = ({ onBackToLogin }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-8 w-full max-w-md mx-4 shadow-lg">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <LoopedLogo className="h-8 w-auto" />
          </div>
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="text-sm mt-1">
            Already have an account?{' '}
            <button onClick={onBackToLogin} className="text-blue-600 hover:underline">
              Log in
            </button>
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="User name"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-xs text-gray-500">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="robot" className="w-4 h-4" />
            <label htmlFor="robot" className="text-sm">
              I’m not a robot
            </label>
          </div>

          <button
            className="w-full bg-black text-white py-2 rounded-full"
            disabled
          >
            Create an account
          </button>

          <p className="text-xs text-gray-500 text-center">
            By creating an account, you agree to our{' '}
            <a href="#" className="underline">Terms of Use</a> and{' '}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
