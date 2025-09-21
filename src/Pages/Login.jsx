import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md -mt-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
