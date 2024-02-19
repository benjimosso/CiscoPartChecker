"use client";

import { useState } from "react";

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="flex flex-col gap-4 w-1/2 mx-auto mt-8"
    >
      <div className="flex flex-col items-center">
        <label htmlFor="email" className="text-lg font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
        />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="password" className="text-lg font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
        />
      </div>
      <button 
      type="submit"
      className="bg-indigo-500 text-white p-2 rounded-md w-1/2 mx-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        Submit</button>
    </form>
  );
}
