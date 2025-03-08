import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Lock, Mail, User, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const nav=useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [authStatus, setAuthStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthStatus("idle");

    setTimeout(() => {
      setIsLoading(false);
      setAuthStatus("success");

      setTimeout(() => {
        setAuthStatus("idle");
      }, 3000);
      nav('/upload')
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Form Section */}
      <motion.div
        className="flex w-full items-center justify-center p-6 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl relative overflow-hidden"
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Tabs */}
            <div className="grid w-full grid-cols-2 mb-8 border-b">
              <motion.button
                onClick={() => setActiveTab("login")}
                className={`p-3 text-lg font-medium transition duration-300 relative ${
                  activeTab === "login" ? "text-emerald-600" : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Login
                {activeTab === "login" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  />
                )}
              </motion.button>
              <motion.button
                onClick={() => setActiveTab("signup")}
                className={`p-3 text-lg font-medium transition duration-300 relative ${
                  activeTab === "signup" ? "text-emerald-600" : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Sign Up
                {activeTab === "signup" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  />
                )}
              </motion.button>
            </div>

            {/* Status Messages */}
            <AnimatePresence>
              {authStatus === "success" && (
                <motion.div
                  className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {activeTab === "login" ? "Successfully logged in!" : "Account created successfully!"}
                </motion.div>
              )}

              {authStatus === "error" && (
                <motion.div
                  className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle className="h-5 w-5 mr-2" />
                  {activeTab === "login" ? "Invalid credentials. Please try again." : "Error creating account. Please try again."}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Forms */}
            <AnimatePresence mode="wait">
              <motion.form
                key={activeTab}
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0, x: activeTab === "login" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === "login" ? 20 : -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "signup" && (
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="pl-10 w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      required
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10 w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-emerald-500 text-white p-3 rounded-lg font-medium hover:bg-emerald-600 transition duration-300 disabled:opacity-50"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? "Processing..." : activeTab === "login" ? "Login" : "Sign Up"}
                </motion.button>
              </motion.form>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Promotional Section */}
      <motion.div
        className="relative flex w-full items-center justify-center bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 p-6 md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative text-center max-w-md">
          <motion.img
            src="https://res.cloudinary.com/dveqjb2e7/image/upload/v1741089155/nyskkbkrjvlj8xpnwrwb.jpg"
            alt="X-ray AI Detection"
            className="rounded-xl shadow-2xl mb-6 border-4 border-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Platform</h2>
          <p className="text-gray-600 mt-2">Sign up or log in to access the features.</p>
        </div>
      </motion.div>
    </div>
  );
}

