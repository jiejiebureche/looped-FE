import React from 'react';
import LoopedLogo from '../assets/looped.svg?react';
import bgImage from '../assets/bg.jpg';

const Login = ({ onSignupClick }) => {
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
          <h2 className="text-2xl font-semibold">Log in</h2>
          <p className="text-sm mt-1">
            Don’t have an account?{' '}
            <button onClick={onSignupClick} className="text-blue-600 hover:underline">
              Sign up
            </button>
          </p>
        </div>

        <div className="my-6">
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Your password"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-right text-sm mt-1">
              <a href="#" className="text-blue-600 hover:underline">
                Forget your password
              </a>
            </p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-full">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
