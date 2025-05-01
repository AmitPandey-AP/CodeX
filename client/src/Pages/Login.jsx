import React from "react";
import { useAppContext } from "../Context/AppContext.jsx";
import toast from "react-hot-toast";

export const Login = () => {
  const { setShowUserLogin, setUser, axios, navigate } = useAppContext();
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // try {
    //   const { data } = await axios.post(`/api/user/${state}`, {
    //     name,
    //     email,
    //     password,
    //   });
    //   if (data.success) {
    //     navigate("/");
    //     setUser(data.user);
    //     setShowUserLogin(false);
    //   } else {
    //     setEmail("");
    //     setPassword("");
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   setEmail("");
    //   setPassword("");
    //   toast.error(error.message);
    // }
    navigate("/");
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-300 backdrop-blur-sm text-gray-200"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="w-80 sm:w-[360px] flex flex-col gap-5 p-8 rounded-2xl shadow-xl bg-zinc-700 border border-zinc-700"
      >
        <p className="text-3xl font-bold text-center text-white tracking-wide">
          {state === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
        </p>

        {state === "register" && (
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1 text-gray-300">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your name"
              className="bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              type="text"
              required
            />
          </div>
        )}

        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-gray-300">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
            className="bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
            type="email"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm mb-1 text-gray-300">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
            className="bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
            type="password"
            required
          />
        </div>

        <p className="text-sm text-gray-400 text-center">
          {state === "register" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary hover:underline cursor-pointer transition-colors"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-primary hover:underline cursor-pointer transition-colors"
              >
                Sign up
              </span>
            </>
          )}
        </p>

        <button
          type="submit"
          onSubmit={onSubmitHandler}
          className="bg-gradient-to-tr from-primary to-primary-dull hover:from-primary-dull hover:to-primary hover:bg-blue-500 text-white w-full py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};
