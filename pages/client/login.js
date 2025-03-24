import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/appContext";

const LoginForm = () => {
  const router = useRouter();
  const {isSignedIn, setIsSignedIn, brandName} = useAppContext();
  const [error, setError] = useState("");

  // Hardcoded credentials (In production, replace this with actual authentication)
  const validEmail = "client@example.com";
  const validPassword = "password123";

  const signIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    if (email === validEmail && password === validPassword) {
      setError("");
      setIsSignedIn(true);
      router.push("/client/portal");
    } else {
      setIsSignedIn(false);
      setError("Invalid credentials. Please try again.");
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      router.push("/client/portal");
    }
  });

  return (
    <div className="flex items-center">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 align-center mx-auto mt-4">
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your client account</h2>
        <form noValidate="" action="" className="space-y-8" onSubmit={signIn}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">Password</label>
                <button rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</button>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
          </div>
          <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
