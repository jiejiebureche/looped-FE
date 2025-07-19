import React from 'react';
import LoopedLogo from '../assets/looped.svg?react';
import bgImage from '../assets/bg4.png';

const Signup = ({ onBackToLogin }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left side image */}
      <div className="w-full md:w-1/2 h-40 md:h-full mb-4 md:mb-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side form directly on white background */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-4">
        <form className="w-full max-w-md space-y-4">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-2">
              <LoopedLogo className="h-12 w-auto" />
            </div>
            <h2 className="text-2xl font-semibold">Welcome to Looped!</h2>
            <p className="text-sm mt-1">
              Already have an account?{' '}
              <button onClick={onBackToLogin} className="text-blue-600 hover:underline">
                Log in
              </button>
            </p>
          </div>

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
