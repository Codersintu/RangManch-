import React, { useState } from 'react'

function Auth() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        {isRegistered ? (
          // ----------- Login Form -----------
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-4">
              Don’t have an account?{" "}
              <span
                className="text-red-600 cursor-pointer font-semibold"
                onClick={() => setIsRegistered(false)}
              >
                Register
              </span>
            </p>
          </div>
        ) : (
          // ----------- Register Form -----------
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              >
                Register
              </button>
            </form>
            <p className="text-center mt-4">
              Do you have an account?{" "}
              <span
                className="text-red-600 cursor-pointer font-semibold"
                onClick={() => setIsRegistered(true)}
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Auth