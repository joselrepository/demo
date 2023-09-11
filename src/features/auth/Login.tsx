import { z } from "zod";
import useAuth from "./hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "../user/hooks/useUser";
import { Navigate } from "react-router-dom";

const LoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type FormType = z.infer<typeof LoginSchema>;

function Login() {
  const { signin, isFetching } = useAuth();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const { username, password } = data;
    signin(username, password);
  };

  if (user) {
    return <Navigate to="/products" />;
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex h-full justify-center items-center bg-white">
        <div className="w-64 flex flex-col justify-center ">
          <div className="">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    {...register("username")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.username && (
                    <p className="text-red-600 font-semibold text-sm">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    {...register("password")}
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <p className="text-red-600 font-semibold text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  disabled={isFetching}
                  type="submit"
                  className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isFetching
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-500"
                  }`}
                >
                  {isFetching ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have account yet?
              <a
                href="#"
                className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-green-500 hidden md:block">
        <img
          className="h-full object-cover"
          alt=""
          src="../../../src/assets/labtop.jpg"
        />
      </div>
    </div>
  );
}

export default Login;
